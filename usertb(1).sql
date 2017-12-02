-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 11 月 10 日 01:15
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `h51707`
--

-- --------------------------------------------------------

--
-- 表的结构 `usertb`
--

CREATE TABLE `usertb` (
  `id` int(11) NOT NULL auto_increment,
  `phone` varchar(50) collate utf8_unicode_ci NOT NULL,
  `password` varchar(50) collate utf8_unicode_ci NOT NULL,
  `pwd` varchar(50) collate utf8_unicode_ci NOT NULL,
  `reg_time` timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=14 ;

--
-- 导出表中的数据 `usertb`
--

INSERT INTO `usertb` (`id`, `phone`, `password`, `pwd`, `reg_time`) VALUES
(2, '2', '2', '2', '2017-10-29 23:51:26'),
(6, '3', '3', '3', '2017-10-31 10:09:12'),
(7, '4', '4', '2', '2017-10-31 10:11:40'),
(12, '123', '123', '123', '2017-11-06 16:12:00'),
(13, '234', '234', '234', '2017-11-06 16:16:46');
