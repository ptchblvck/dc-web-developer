USE Mondial;

-- wie viele einwohner hat oesterreich?

SELECT Population 
FROM country 
WHERE Name = 'Austria';

-- wie viele einwohner hat der kontinent europa?

SELECT SUM(country.Population) 
FROM 
(
	SELECT country.Name
	FROM country
	JOIN encompasses ON country.Code = encompasses.Country
	WHERE encompasses.Continent = 'Europe'
) AS countries_in_eu
JOIN country ON country.Name = countries_in_eu.Name;

-- welche fluesse fliessen durch oesterreich?

SELECT COUNT(*) AS "fluesse in oesterreich"
FROM geo_river
WHERE geo_river.Country = 'A';

-- welche fluesse fliessen durch europa (nur den Flussnamen)?

SELECT DISTINCT River
FROM geo_river
JOIN encompasses ON encompasses.Country = geo_river.Country 
WHERE encompasses.Continent = 'Europe'
ORDER BY River;

-- wie viel prozent der menschen leben in europa?

SELECT 
	ROUND(100 * 
	(
		SELECT SUM(c.Population * encompasses.Percentage / 100) 
		FROM 
			country AS c,
			encompasses
		WHERE 
			c.Code = encompasses.Country
		AND 
			encompasses.Continent = 'Europe'
	)
	/ SUM(country.Population), 2) AS "Prozent an gesamtbevoelkerung"
FROM country;

SELECT SUM(country.Population)
FROM
	country;


-- alle laender die mit einem a anfangen

SELECT Name 
FROM country AS c
WHERE Name LIKE 'A%';

-- alle laender die mit einem a anfangen und deren bundeslaender mit einwohnerzahl sortiert nach einwohnerzahl

SELECT ct.Name AS Bundesland, ct.Population 
FROM country AS c
JOIN province AS ct ON c.Code = ct.Country
WHERE c.Name LIKE 'A%'
ORDER BY ct.Population DESC;


-- alle fluesse die durch europa fliesen (nur fleusse und deren laenge) sortiert nach laenge

SELECT r.Name,
r.`Length` 
FROM river AS r
JOIN (
	SELECT DISTINCT River
	FROM geo_river
	JOIN encompasses ON encompasses.Country = geo_river.Country 
	WHERE encompasses.Continent = 'Europe'
	ORDER BY River
) AS gr ON gr.River = r.Name 
ORDER BY r.`Length` DESC;

-- Alle inseln im pazifik mit >50% islam bekenntnis

SELECT geo_island.Island, religion.Percentage AS percentage
FROM geo_island
JOIN religion ON religion.Country = geo_island.Country
WHERE religion.Percentage >= 50 AND religion.Name LIKE 'Muslim';


SELECT geo_island.Island, islandIn.Sea, religion.Percentage AS percentage 
	FROM  geo_island
	JOIN islandIn ON geo_island.Island  = islandIn.Island 
	JOIN religion ON religion.Country = geo_island.Country 
	WHERE islandIn.Sea LIKE 'Pacific%'
	AND religion.Percentage >= 50
	AND religion.Name LIKE 'Muslim%';


-- Alle 3000er, welche in einem Land sind, welches zu mindestens 60% römisch Katholisch ist

SELECT DISTINCT mountain.Name, mountain.Height 
FROM mountain
JOIN geo_mountain ON geo_mountain.Mountain = mountain.Name 
JOIN religion ON religion.Country = geo_mountain.Country 
WHERE mountain.Height >= 3000
AND mountain.Height < 4000
AND religion.Name LIKE 'rom%'
AND religion.Percentage >= 60
ORDER BY mountain.Height DESC;


SELECT *
FROM geo_mountain;

SELECT *
FROM religion
WHERE Name LIKE 'rom%' AND Percentage >= 60;

/* Alle Länder mit mindestens einem See mit mindestens 100 Meter Tiefe und 
 * mindestens einem Berg mit mindestens 1500 Höhenmeter */

SELECT *
FROM lake
WHERE `Depth` >= 100;

SELECT *
FROM mountain
WHERE Height >= 1500;

SELECT *
FROM geo_mountain;

SELECT DISTINCT country.Name 
FROM country
JOIN geo_lake ON country.Code = geo_lake.Country
JOIN lake ON lake.Name = geo_lake.Lake 
JOIN geo_mountain ON country.Code = geo_mountain.Country 
JOIN mountain ON mountain.Name  = geo_mountain.Mountain 
WHERE lake.`Depth` >= 100
AND mountain.Height  >= 1500
ORDER BY country.Name ASC;

-- Einwohnerzahl pro Religion

SELECT * 
FROM country;

SELECT DISTINCT religion.Name, 
FROM religion;


SELECT religion.Name, SUM(ROUND(((country.Population * religion.Percentage) / 100), 0)) AS 'PopulationCount'
FROM religion
JOIN country on religion.Country = country.Code
GROUP BY religion.Name
ORDER BY PopulationCount DESC ;

/* group by schreibt den wert ohne summe in die erste zelle und alles was dann niedriger ist bzw. 
 * nicht der erste ist wird ignoriert und ueberschrieben  max und min value testen um zu verifizieren */ 


-- Alle Länder, nur die Namen und die Meere dazu (keine Null Werte)

SELECT country.Name, geo_sea.Sea 
FROM country
JOIN geo_sea ON geo_sea.Country = country.Code;

-- Alle Länder, nur die Namen, und wenn sie haben, das Meer dazu

SELECT DISTINCT country.Name, geo_sea.Sea 
FROM country
LEFT JOIN geo_sea ON country.Code = geo_sea.Country
ORDER BY country.Name;

-- pruefung located --> located kann nicht verwendet werden.

SELECT sea.Name 
FROM sea
WHERE sea.Name NOT IN 
(
	SELECT located.Sea 
	FROM located
	WHERE located.Sea IS NOT NULL
	GROUP BY located.Sea 
);

-- Das Unabhängigkeitsdatum von Ländern die eine Wüste haben und die ethnische Gruppe African

SELECT *
FROM ethnicGroup;

SELECT *
FROM politics;

SELECT *
FROM geo_desert;

SELECT geo_desert.Country  
FROM geo_desert
JOIN ethnicGroup ON geo_desert.Country = ethnicGroup.Country
WHERE ethnicGroup.Name LIKE 'Africa%';

SELECT politics.Independence, country.Name 
FROM  politics 
JOIN country ON politics.Country = country.Code
WHERE politics.Country IN (
	SELECT geo_desert.Country  
	FROM geo_desert
	JOIN ethnicGroup ON geo_desert.Country = ethnicGroup.Country
	WHERE ethnicGroup.Name LIKE 'Africa%'
);

-- der andere Weg dann:

SELECT geo_desert.Country 
FROM geo_desert 
JOIN ethnicGroup ON geo_desert.Country = ethnicGroup.Country
WHERE ethnicGroup.Name LIKE 'Africa%'

-- Welche Länder haben genau 3 Städte? Welche sind sie?

SELECT Country, COUNT(*) AS 'cityCount'
FROM city
GROUP BY Country;

SELECT country.Name
FROM country
JOIN (
	SELECT city.Country, COUNT(*) AS 'cityCount'
	FROM city
	GROUP BY Country
) AS cityCount ON country.Code = cityCount.Country

WHERE cityCount.cityCount = 3;

SELECT *
FROM country;

SELECT country.Name
FROM city
JOIN country ON country.Code = city.Country
GROUP BY country
HAVING COUNT(*) = 3;