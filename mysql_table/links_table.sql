/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50638
Source Host           : 47.52.74.236:3306
Source Database       : bolg_database

Target Server Type    : MYSQL
Target Server Version : 50638
File Encoding         : 65001

Date: 2017-12-22 10:10:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for links_table
-- ----------------------------
DROP TABLE IF EXISTS `links_table`;
CREATE TABLE `links_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `linksName` varchar(100) DEFAULT NULL COMMENT '网站名字',
  `linksUrl` varchar(200) DEFAULT NULL COMMENT '网站地址',
  `linksTime` varchar(100) DEFAULT NULL COMMENT '发布时间',
  `masterEmail` varchar(100) DEFAULT NULL COMMENT '站长邮箱',
  `linksDesc` varchar(500) DEFAULT NULL COMMENT '网站描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
