/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50638
Source Host           : 47.52.74.236:3306
Source Database       : bolg_database

Target Server Type    : MYSQL
Target Server Version : 50638
File Encoding         : 65001

Date: 2017-12-22 10:10:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for message_table
-- ----------------------------
DROP TABLE IF EXISTS `message_table`;
CREATE TABLE `message_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userface` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `userName` varchar(64) DEFAULT NULL COMMENT '用户名字',
  `userAsk` varchar(700) DEFAULT NULL COMMENT '留言内容',
  `askTime` varchar(100) DEFAULT NULL COMMENT '留言时间',
  `msgReply` varchar(9999) DEFAULT NULL COMMENT '留言回复数据',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
