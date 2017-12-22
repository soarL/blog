/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50638
Source Host           : 47.52.74.236:3306
Source Database       : bolg_database

Target Server Type    : MYSQL
Target Server Version : 50638
File Encoding         : 65001

Date: 2017-12-22 10:09:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article_table
-- ----------------------------
DROP TABLE IF EXISTS `article_table`;
CREATE TABLE `article_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newsName` varchar(100) NOT NULL COMMENT '文章标题名字',
  `newsAuthor` varchar(64) NOT NULL COMMENT '作者名字',
  `newsLook` varchar(30) NOT NULL COMMENT '浏览权限',
  `newsTime` date NOT NULL COMMENT '发表时间',
  `newsContent` text NOT NULL COMMENT '文章内容',
  `newSketch` varchar(255) NOT NULL COMMENT '内容概要',
  `isShow` varchar(4) DEFAULT NULL COMMENT '是否展示',
  `url` varchar(255) DEFAULT '' COMMENT '链接地址',
  `imgSrc` varchar(255) DEFAULT '' COMMENT '图片地址',
  `viewCount` int(255) unsigned DEFAULT '0' COMMENT '点赞',
  `classify` varchar(255) DEFAULT '' COMMENT '分类',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
