/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : study

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-02-05 13:58:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for qidian_book
-- ----------------------------
DROP TABLE IF EXISTS `qidian_book`;
CREATE TABLE `qidian_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(66) DEFAULT NULL,
  `statu` varchar(30) DEFAULT NULL,
  `classfix` varchar(60) DEFAULT NULL,
  `allclassfix` varchar(60) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `updates` varchar(40) DEFAULT NULL,
  `intro` text,
  `imgSrc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33081 DEFAULT CHARSET=utf8;
