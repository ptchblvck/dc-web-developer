use Mondial;

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
	100 * 
	(
		SELECT SUM(c.Population) 
		FROM 
			country AS c,
			encompasses
		WHERE 
			c.Code = encompasses.Country
		AND 
			encompasses.Continent = 'Europe'
	)
	/ SUM(country.Population) AS "Prozent an gesamtbevoelkerung"
FROM country;

SELECT SUM(country.Population)
FROM
	country;


-- alle laender die mit einem a anfangen

SELECT Name 
FROM country AS c
WHERE Name LIKE 'A%';

-- alle laender die mit einem a anfangen und deren bundeslaender mit einwohnerzahl sortiert nach einwohnerzahl

SELECT c.Name, ct.Province, ct.Population 
FROM country AS c
JOIN city AS ct ON c.Code = ct.Country
WHERE c.Name LIKE 'A%'
ORDER BY c.Name , ct.Population DESC;

-- alle fluesse die durch europa fliesen (nur fleusse und deren laenge) sortiert nach laenge\

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