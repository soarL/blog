/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50639
Source Host           : 47.52.74.236:3306
Source Database       : bolg_database

Target Server Type    : MYSQL
Target Server Version : 50639
File Encoding         : 65001

Date: 2018-02-05 13:57:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for neihan_table
-- ----------------------------
DROP TABLE IF EXISTS `neihan_table`;
CREATE TABLE `neihan_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar_url` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT '图片地址',
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '作者名字',
  `content` text COLLATE utf8_unicode_ci COMMENT '段子内容',
  `status_desc` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '发表状态',
  `digg_count` int(11) DEFAULT NULL COMMENT '收到的赞',
  `comment_count` int(11) DEFAULT NULL COMMENT '评论数',
  `favorite_count` int(11) DEFAULT NULL COMMENT '被收藏',
  `bury_count` int(11) DEFAULT NULL COMMENT '反对的数量',
  `user_id` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=854 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
