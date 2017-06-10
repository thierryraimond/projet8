-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 01 Juin 2017 à 08:35
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sokoban`
--

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

CREATE TABLE `score` (
  `id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `playerName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `score`
--

INSERT INTO `score` (`id`, `level`, `score`, `playerName`) VALUES
(1, 1, -17, 'Teddy'),
(2, 2, 22, 'Teddy'),
(3, 1, 10, 'Thalia'),
(4, 1, 10, 'Thalia'),
(5, 1, 1, 'thra'),
(6, 2, 1, 'thra'),
(7, 3, 1, 'thra'),
(8, 4, 1, 'thra'),
(9, 5, 1, 'thra'),
(10, 6, 2, 'thra'),
(11, 7, 1, 'thra'),
(12, 8, 1, 'thra'),
(13, 9, 1, 'thra'),
(14, 10, 1, 'thra'),
(15, 11, 1, 'thra'),
(16, 12, 2, 'thra'),
(17, 13, 2, 'thra'),
(18, 14, 1, 'thra'),
(19, 15, 1, 'thra'),
(20, 1, 1, 'hg'),
(21, 1, 1, 'rtretretretert'),
(22, 2, 1, 'rtretretretert'),
(23, 3, 1, 'rtretretretert'),
(24, 1, 2, ''),
(25, 2, 2, ''),
(26, 3, 2, ''),
(27, 4, 2, ''),
(28, 5, 2, ''),
(29, 6, 2, ''),
(30, 7, 2, ''),
(31, 8, 2, ''),
(32, 9, 2, ''),
(33, 10, 2, ''),
(34, 11, 2, ''),
(35, 12, 2, ''),
(36, 13, 2, ''),
(37, 14, 2, ''),
(38, 15, 2, '');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `date`) VALUES
(1, 'lol', '123', '2015-01-22 14:35:00'),
(2, 'Teddy', '123', '2015-01-22 14:35:53'),
(3, 'Teddyy', '1234', '2015-01-22 14:40:38'),
(4, 'Teddyyu', '1234569', '2015-01-22 14:57:29'),
(6, '', '', '2015-02-04 19:00:14'),
(7, 'Thalia', 'test', '2015-02-05 00:57:17'),
(8, 'Mystraht', 'test', '2015-02-05 01:14:56'),
(9, 'srgr', 'ze', '2015-02-05 01:22:20'),
(10, 'ert', 'ert', '2015-02-05 13:27:24'),
(11, 'jeanmichel', 'banana', '2015-02-05 13:46:43'),
(12, 'Thaliaa', 'testt', '2015-02-06 11:25:17'),
(13, 'thaliahha', 'toast', '2015-02-06 14:36:51'),
(14, 'thaliaheeeeeeeeeeeeeha', 'toast', '2015-02-06 14:38:55'),
(15, 'nicolas', 'hello', '2015-02-06 15:52:29'),
(16, 'thra', '1', '2017-05-19 20:17:23'),
(17, 'test', '1', '2017-05-24 11:49:59'),
(18, 'hg', '', '2017-05-24 18:27:01'),
(19, 'rtretretretert', '', '2017-05-29 00:50:21');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `score`
--
ALTER TABLE `score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
