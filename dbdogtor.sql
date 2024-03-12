-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 12, 2024 at 02:38 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbdogtor`
--

-- --------------------------------------------------------

--
-- Table structure for table `pet`
--

DROP TABLE IF EXISTS `pet`;
CREATE TABLE IF NOT EXISTS `pet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `pet_owner` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pet_owner` (`pet_owner`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pet`
--

INSERT INTO `pet` (`id`, `name`, `pet_owner`) VALUES
(1, 'Madonna', 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `birth` varchar(100) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `street` varchar(100) NOT NULL,
  `house_number` varchar(100) NOT NULL,
  `complement` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `name`, `email`, `password`, `birth`, `cpf`, `phone`, `cep`, `street`, `house_number`, `complement`) VALUES
(1, 'Diogo Estevão', 'diogo@gmail.com', '123456789', '23/03/2003', '16472139679', '31995429780', '30451158', 'Rua das Flores', '88', 'Casa'),
(2, 'Diogo Estevão', 'diogo2@gmail.com', '123456789', '23/03/2003', '16472139679', '31995429780', '30451158', 'Rua das Flores', '88', 'Casa'),
(3, 'any', 'any', 'any', 'any', '16472139679', 'any', 'any', 'any', 'any', 'any');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
