/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50638
Source Host           : 47.52.74.236:3306
Source Database       : bolg_database

Target Server Type    : MYSQL
Target Server Version : 50638
File Encoding         : 65001

Date: 2017-12-22 10:10:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `userEmail` varchar(30) DEFAULT NULL COMMENT '邮箱',
  `sex` varchar(2) DEFAULT NULL COMMENT '性别',
  `vip_level` varchar(10) DEFAULT NULL COMMENT '注册会员/中级会员/高级会员/超级管理员',
  `vip_state` varchar(10) DEFAULT NULL COMMENT '会员状态/正常使用/限制使用',
  `userLocation` varchar(100) DEFAULT NULL COMMENT '用户住址',
  `like1` varchar(200) DEFAULT NULL COMMENT '用户喜好',
  `userBirthday` varchar(20) DEFAULT NULL COMMENT '用户生日',
  `userGroup` varchar(30) DEFAULT NULL COMMENT '用户所在组',
  `userNameTrue` varchar(30) DEFAULT NULL COMMENT '用户真实名字',
  `userPhone` varchar(15) DEFAULT NULL COMMENT '用户电话',
  `userFace` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `userNames` varchar(100) DEFAULT NULL COMMENT '用户的名字非登',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
