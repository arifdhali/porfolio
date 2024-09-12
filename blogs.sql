-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 06, 2024 at 12:23 PM
-- Server version: 8.0.27
-- PHP Version: 7.4.26

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
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category_relation`
--

INSERT INTO `category_relation` (`id`, `post_id`, `category_id`, `date`) VALUES
(2, 1, 30, '2024-09-05'),
(3, 4, 27, '2024-09-05'),
(4, 5, 27, '2024-09-05'),
(5, 6, 27, '2024-09-05'),
(6, 7, 27, '2024-09-05'),
(7, 8, 27, '2024-09-05'),
(8, 9, 27, '2024-09-05'),
(9, 10, 30, '2024-09-05'),
(10, 11, 30, '2024-09-05'),
(11, 12, 27, '2024-09-05'),
(12, 13, 29, '2024-09-05'),
(13, 14, 27, '2024-09-06');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_title` text,
  `post_content` mediumtext,
  `post_thumbnail` text,
  `category_id` int DEFAULT NULL,
  `post_status` enum('1','0') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '1',
  `post_publish_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `post_title`, `post_content`, `post_thumbnail`, `category_id`, `post_status`, `post_publish_date`) VALUES
(1, 'What is Python ', 'Here all content', 'featured_img-photo-1570158268183-d296b2892211.jpeg', 30, '1', '2024-09-05'),
(2, NULL, 'ds', 'featured_img-photo-1500648767791-00dcc994a43e.jpeg', NULL, '1', '2024-09-05'),
(3, 'afds', 'ds', 'featured_img-photo-1500648767791-00dcc994a43e.jpeg', NULL, '0', '2024-09-05'),
(4, 'Nostrud molestiae in', 'Aut voluptas ex volu', 'featured_img-photo-1554151228-14d9def656e4.jpeg', 27, '1', '2024-09-05'),
(5, 'Nostrud molestiae in', 'Aut voluptas ex volu', 'featured_img-photo-1554151228-14d9def656e4.jpeg', 27, '1', '2024-09-05'),
(6, 'Nostrud molestiae in', 'Aut voluptas ex volu', 'featured_img-photo-1554151228-14d9def656e4.jpeg', 27, '1', '2024-09-05'),
(7, 'Nostrud molestiae in', 'Aut voluptas ex volu', 'featured_img-photo-1554151228-14d9def656e4.jpeg', 27, '1', '2024-09-05'),
(8, 'Nostrud molestiae in', 'Aut voluptas ex volu', 'featured_img-photo-1554151228-14d9def656e4.jpeg', 27, '0', '2024-09-05'),
(9, 'Nostrud molestiae in', 'Aut voluptas ex volu', 'featured_img-photo-1554151228-14d9def656e4.jpeg', 27, '1', '2024-09-05'),
(10, 'Ea quae et anim qui', 'Porro minima rem et ', 'featured_img-photo-1534528741775-53994a69daeb.jpeg', 30, '1', '2024-09-05'),
(11, 'Ea quae et anim qui', 'Porro minima rem et ', 'featured_img-photo-1534528741775-53994a69daeb.jpeg', 30, '1', '2024-09-05'),
(12, 'Arif', 'Ex quas fugiat conse', 'featured_img-photo-1506794778202-cad84cf45f1d.jpeg', 27, '1', '2024-09-05'),
(13, 'C++ is best option for future ?', 'Yes', 'featured_img-photo-1506794778202-cad84cf45f1d.jpeg', 29, '1', '2024-09-05'),
(14, 'Aut exercitationem N', 'In proident volupta', 'featured_img-photo-1570158268183-d296b2892211.jpeg', 27, '1', '2024-09-06');

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
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `post_category`
--

INSERT INTO `post_category` (`id`, `category`, `subscribe_status`, `create_date`) VALUES
(35, 'C#', 'false', '2024-09-04'),
(36, 'Biology', 'false', '2024-09-06'),
(31, 'Test', 'false', '2024-09-04'),
(30, 'Python', 'false', '2024-09-04'),
(29, 'C++', 'false', '2024-09-04'),
(27, 'Java', 'false', '2024-09-03');

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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `age`, `email`, `gender`, `phone_number`, `country`, `address`, `login_date`, `last_login`, `password`) VALUES
(1, 'arif', 23, 'arif@gmail.com', 'male', 232132321, 'india', 'kolkata', '2024-09-06', '10:14:49', 'admin1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
