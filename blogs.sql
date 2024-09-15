-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 15, 2024 at 06:18 PM
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
-- Database: `blogs`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_relation`
--

DROP TABLE IF EXISTS `category_relation`;
CREATE TABLE IF NOT EXISTS `category_relation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_title` text,
  `post_slug` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `post_excerpt` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `post_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `post_thumbnail` text,
  `category_id` int DEFAULT NULL,
  `post_status` enum('1','0') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '1',
  `post_publish_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post_category`
--

DROP TABLE IF EXISTS `post_category`;
CREATE TABLE IF NOT EXISTS `post_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(1000) DEFAULT NULL,
  `subscribe_status` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'false',
  `create_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `post_category`
--

INSERT INTO `post_category` (`id`, `category`, `subscribe_status`, `create_date`) VALUES
(35, 'C#', 'false', '2024-09-04'),
(36, 'Biology', 'false', '2024-09-06'),
(30, 'Python', 'false', '2024-09-04'),
(29, 'C++', 'false', '2024-09-04'),
(27, 'Java', 'false', '2024-09-03'),
(37, 'Docker', 'false', '2024-09-07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `age` int NOT NULL,
  `email` text,
  `gender` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phone_number` int NOT NULL,
  `country` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `address` text,
  `login_date` date DEFAULT NULL,
  `last_login` time DEFAULT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `age`, `email`, `gender`, `phone_number`, `country`, `address`, `login_date`, `last_login`, `password`) VALUES
(1, 'arif', 23, 'arif@gmail.com', 'male', 232132321, 'india', 'kolkata', '2024-09-15', '11:38:29', 'admin1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
