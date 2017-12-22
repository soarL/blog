/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50638
Source Host           : 47.52.74.236:3306
Source Database       : bolg_database

Target Server Type    : MYSQL
Target Server Version : 50638
File Encoding         : 65001

Date: 2017-12-22 10:10:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for system_table
-- ----------------------------
DROP TABLE IF EXISTS `system_table`;
CREATE TABLE `system_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` varchar(60) DEFAULT NULL COMMENT '版本号',
  `author` varchar(34) DEFAULT NULL COMMENT '网站作者',
  `homePage` varchar(40) DEFAULT NULL COMMENT '网站首页地址',
  `server` varchar(30) DEFAULT NULL COMMENT '服务器环境',
  `keywords` varchar(800) DEFAULT NULL COMMENT '默认关键字',
  `powerby` varchar(100) DEFAULT NULL COMMENT '版权信息',
  `description` varchar(1000) DEFAULT NULL COMMENT '网站描述',
  `record` varchar(255) DEFAULT NULL COMMENT '网站备案号',
  `userRights` varchar(40) DEFAULT NULL COMMENT '用户权限',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
