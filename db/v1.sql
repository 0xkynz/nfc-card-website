-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 10, 2021 at 05:47 PM
-- Server version: 5.7.30
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `vcardme`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `id` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`id`, `type`) VALUES
('99999999999', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `displayName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `aboutMe` text,
  `tiktok` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `cardID` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `displayName`, `password`, `email`, `aboutMe`, `tiktok`, `facebook`, `twitter`, `instagram`, `cardID`, `createdAt`, `updatedAt`) VALUES
(1, 'johnasd123', 'Van Name', '$2a$10$dCIAjjCEbyvuAkPoZ5f1qug2bXPMzLlRaWks2M6cW7gjKHmpXMUdq', 'john@yopmail.com', 'Hello', 'https://www.tiktok.com/en', 'http://google.com', 'http://twitter.com', 'http://instagram.com', '11223344', '2021-03-10 17:08:28', '2021-03-10 17:08:28'),
(2, 'Test', 'Hello', '$2a$10$46umyP5OzOZ4E.LxR7OiMOuA/fu6Yves/Gt2i8zTZsC5E0c63P6aa', 'test@gmail.com', 'Hello\nhello', 'http://google.com/tiktok', 'http://google.com/fb', 'http://google.com/twitter', 'http://google.com', '999', '2021-03-10 14:52:40', '2021-03-10 10:04:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
