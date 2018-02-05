/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : study

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-02-05 13:58:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for zhihu_table
-- ----------------------------
DROP TABLE IF EXISTS `zhihu_table`;
CREATE TABLE `zhihu_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `agree` varchar(100) DEFAULT NULL,
  `author` varchar(180) DEFAULT NULL,
  `authorInfo` varchar(255) DEFAULT NULL,
  `RichText` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
