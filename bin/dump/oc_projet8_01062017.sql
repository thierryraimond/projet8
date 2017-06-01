-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema sokoban2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sokoban2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sokoban2` DEFAULT CHARACTER SET latin1 ;
USE `sokoban2` ;

-- -----------------------------------------------------
-- Table `sokoban2`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sokoban2`.`USER` (
  `userId` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `sokoban2`.`ADVENTURE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sokoban2`.`ADVENTURE` (
  `adventureId` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`adventureId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sokoban2`.`SCORE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sokoban2`.`SCORE` (
  `scoreId` INT(11) NOT NULL AUTO_INCREMENT,
  `level` INT(11) NOT NULL,
  `score` INT(11) NOT NULL,
  `userId` INT(11) NOT NULL,
  `adventureId` INT NOT NULL,
  PRIMARY KEY (`scoreId`, `userId`),
  INDEX `fk_SCORE_USER_idx` (`userId` ASC),
  INDEX `fk_SCORE_ADVENTURE1_idx` (`adventureId` ASC),
  CONSTRAINT `fk_SCORE_USER`
    FOREIGN KEY (`userId`)
    REFERENCES `sokoban2`.`USER` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SCORE_ADVENTURE1`
    FOREIGN KEY (`adventureId`)
    REFERENCES `sokoban2`.`ADVENTURE` (`adventureId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 39
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- DONNEES 
-- -----------------------------------------------------

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`userId`, `name`, `password`, `date`) VALUES
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
-- Contenu de la table `adventure`
--

INSERT INTO `adventure` (`adventureId`, `name`) VALUES
(1, 'classique'),
(2, 'nouvelle');

--
-- Contenu de la table `score`
--

INSERT INTO `score` (`scoreId`, `level`, `score`, `userId`, `adventureId`) VALUES
(1, 1, -17, 2, 1),
(2, 2, 22, 2, 1),
(3, 1, 10, 7, 1),
(4, 1, 10, 7, 1),
(5, 1, 1, 16, 1),
(6, 2, 1, 16, 1),
(7, 3, 1, 16, 1),
(8, 4, 1, 16, 1),
(9, 5, 1, 16, 1),
(10, 6, 2, 16, 1),
(11, 7, 1, 16, 1),
(12, 8, 1, 16, 1),
(13, 9, 1, 16, 1),
(14, 10, 1, 16, 1),
(15, 11, 1, 16, 1),
(16, 12, 2, 16, 1),
(17, 13, 2, 16, 1),
(18, 14, 1, 16, 1),
(19, 15, 1, 16, 1),
(20, 1, 1, 18, 1),
(21, 1, 1, 19, 1),
(22, 2, 1, 19, 1),
(23, 3, 1, 19, 1),
(24, 1, 2, 6, 1),
(25, 2, 2, 6, 1),
(26, 3, 2, 6, 1),
(27, 4, 2, 6, 1),
(28, 5, 2, 6, 1),
(29, 6, 2, 6, 1),
(30, 7, 2, 6, 1),
(31, 8, 2, 6, 1),
(32, 9, 2, 6, 1),
(33, 10, 2, 6, 1),
(34, 11, 2, 6, 1),
(35, 12, 2, 6, 1),
(36, 13, 2, 6, 1),
(37, 14, 2, 6, 1),
(38, 15, 2, 6, 1);