-- MariaDB dump 10.19  Distrib 10.9.4-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: zoo
-- ------------------------------------------------------
-- Server version	10.9.4-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `animal`
--

DROP TABLE IF EXISTS `animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animal` (
  `animalID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `species` varchar(200) NOT NULL,
  `cage_cagenr_fk` int(11) NOT NULL,
  PRIMARY KEY (`animalID`),
  KEY `animal_FK` (`cage_cagenr_fk`),
  CONSTRAINT `animal_FK` FOREIGN KEY (`cage_cagenr_fk`) REFERENCES `cage` (`cagenr`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal`
--

LOCK TABLES `animal` WRITE;
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
INSERT INTO `animal` VALUES
(1,'Yoshi','dinosaur',2);
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animalzookeeper`
--

DROP TABLE IF EXISTS `animalzookeeper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animalzookeeper` (
  `animal_ID_fk` int(11) NOT NULL,
  `zookeeper_socialsecnr_fk` int(11) NOT NULL,
  PRIMARY KEY (`animal_ID_fk`,`zookeeper_socialsecnr_fk`),
  KEY `animalzookeeper_FK_1` (`zookeeper_socialsecnr_fk`),
  CONSTRAINT `animalzookeeper_FK` FOREIGN KEY (`animal_ID_fk`) REFERENCES `animal` (`animalID`) ON DELETE CASCADE,
  CONSTRAINT `animalzookeeper_FK_1` FOREIGN KEY (`zookeeper_socialsecnr_fk`) REFERENCES `zookeeper` (`socialsecuritynr`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animalzookeeper`
--

LOCK TABLES `animalzookeeper` WRITE;
/*!40000 ALTER TABLE `animalzookeeper` DISABLE KEYS */;
/*!40000 ALTER TABLE `animalzookeeper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cage`
--

DROP TABLE IF EXISTS `cage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cage` (
  `cagenr` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `dangerlevel` int(11) NOT NULL,
  `zooID_fk` int(11) NOT NULL,
  PRIMARY KEY (`cagenr`),
  KEY `cage_FK` (`zooID_fk`),
  CONSTRAINT `cage_FK` FOREIGN KEY (`zooID_fk`) REFERENCES `zoo` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cage`
--

LOCK TABLES `cage` WRITE;
/*!40000 ALTER TABLE `cage` DISABLE KEYS */;
INSERT INTO `cage` VALUES
(2,82,3,1);
/*!40000 ALTER TABLE `cage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributor`
--

DROP TABLE IF EXISTS `distributor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `distributor` (
  `taxnr` varchar(100) NOT NULL,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`taxnr`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor`
--

LOCK TABLES `distributor` WRITE;
/*!40000 ALTER TABLE `distributor` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food` (
  `barcode` varchar(100) NOT NULL,
  `name` varchar(200) NOT NULL,
  `ingredients` varchar(400) NOT NULL,
  PRIMARY KEY (`barcode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fooddistributor`
--

DROP TABLE IF EXISTS `fooddistributor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fooddistributor` (
  `food_barcode_fk` varchar(100) NOT NULL,
  `distributor_taxnumber_fk` varchar(100) NOT NULL,
  PRIMARY KEY (`food_barcode_fk`,`distributor_taxnumber_fk`),
  KEY `fooddistributor_FK_1` (`distributor_taxnumber_fk`),
  CONSTRAINT `fooddistributor_FK` FOREIGN KEY (`food_barcode_fk`) REFERENCES `food` (`barcode`) ON DELETE CASCADE,
  CONSTRAINT `fooddistributor_FK_1` FOREIGN KEY (`distributor_taxnumber_fk`) REFERENCES `distributor` (`taxnr`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fooddistributor`
--

LOCK TABLES `fooddistributor` WRITE;
/*!40000 ALTER TABLE `fooddistributor` DISABLE KEYS */;
/*!40000 ALTER TABLE `fooddistributor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footanimal`
--

DROP TABLE IF EXISTS `footanimal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `footanimal` (
  `food_barcode_fk` varchar(100) NOT NULL,
  `animal_ID` int(11) NOT NULL,
  PRIMARY KEY (`food_barcode_fk`,`animal_ID`),
  KEY `footanimal_FK_1` (`animal_ID`),
  CONSTRAINT `footanimal_FK` FOREIGN KEY (`food_barcode_fk`) REFERENCES `food` (`barcode`) ON DELETE CASCADE,
  CONSTRAINT `footanimal_FK_1` FOREIGN KEY (`animal_ID`) REFERENCES `animal` (`animalID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footanimal`
--

LOCK TABLES `footanimal` WRITE;
/*!40000 ALTER TABLE `footanimal` DISABLE KEYS */;
/*!40000 ALTER TABLE `footanimal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zoo`
--

DROP TABLE IF EXISTS `zoo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zoo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zoo`
--

LOCK TABLES `zoo` WRITE;
/*!40000 ALTER TABLE `zoo` DISABLE KEYS */;
INSERT INTO `zoo` VALUES
(1,'Berliner Zoo','Hardenbergplatz 8, 10787 Berlin'),
(2,'Zoo Leipzig','Pfaffendorfer Strasse 29, 04105 Leipzig');
/*!40000 ALTER TABLE `zoo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zoodistributor`
--

DROP TABLE IF EXISTS `zoodistributor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zoodistributor` (
  `zooID_fk` int(11) NOT NULL,
  `distributor_taxnumber_fk` varchar(100) NOT NULL,
  PRIMARY KEY (`zooID_fk`,`distributor_taxnumber_fk`),
  KEY `zoodistributor_FK_1` (`distributor_taxnumber_fk`),
  CONSTRAINT `zoodistributor_FK` FOREIGN KEY (`zooID_fk`) REFERENCES `zoo` (`ID`) ON DELETE CASCADE,
  CONSTRAINT `zoodistributor_FK_1` FOREIGN KEY (`distributor_taxnumber_fk`) REFERENCES `distributor` (`taxnr`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zoodistributor`
--

LOCK TABLES `zoodistributor` WRITE;
/*!40000 ALTER TABLE `zoodistributor` DISABLE KEYS */;
/*!40000 ALTER TABLE `zoodistributor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zookeeper`
--

DROP TABLE IF EXISTS `zookeeper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zookeeper` (
  `socialsecuritynr` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `address` varchar(400) NOT NULL,
  `zooID_fk` int(11) NOT NULL,
  PRIMARY KEY (`socialsecuritynr`),
  KEY `zookeeper_FK` (`zooID_fk`),
  CONSTRAINT `zookeeper_FK` FOREIGN KEY (`zooID_fk`) REFERENCES `zoo` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zookeeper`
--

LOCK TABLES `zookeeper` WRITE;
/*!40000 ALTER TABLE `zookeeper` DISABLE KEYS */;
INSERT INTO `zookeeper` VALUES
(382140383,'Luigi Bruder','Piranharohr 10, 28993 Pilzreich',1),
(425111080,'Mario Bruder','Piranharohr 9, 28993 Pilzreich',1);
/*!40000 ALTER TABLE `zookeeper` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-01  0:21:58
