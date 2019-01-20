/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.53-log : Database - mge_mora
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mge_mora` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `mge_mora`;

/*Table structure for table `mge_diamond_log` */

DROP TABLE IF EXISTS `mge_diamond_log`;

CREATE TABLE `mge_diamond_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uno` int(10) unsigned NOT NULL COMMENT '我的uno',
  `tragetUno` int(10) unsigned NOT NULL COMMENT '对方uno',
  `type` enum('0','1') NOT NULL COMMENT '变更类型',
  `change` double(15,2) unsigned NOT NULL COMMENT '变更数量',
  `content` varchar(30) NOT NULL COMMENT '变更说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户钻石变更日志表';

/*Table structure for table `mge_member` */

DROP TABLE IF EXISTS `mge_member`;

CREATE TABLE `mge_member` (
  `uno` int(10) NOT NULL,
  `diamond` double(15,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '钻石数量',
  `freezeDiamond` double(15,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '冻结钻石数量',
  PRIMARY KEY (`uno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='竞猜用户表';

/*Table structure for table `mge_mora_config` */

DROP TABLE IF EXISTS `mge_mora_config`;

CREATE TABLE `mge_mora_config` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `value` varchar(20) DEFAULT NULL,
  `content` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='竞猜配置表';

/*Table structure for table `mge_order_mora` */

DROP TABLE IF EXISTS `mge_order_mora`;

CREATE TABLE `mge_order_mora` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uno` int(10) unsigned NOT NULL COMMENT '我的uno',
  `targetUno` int(10) unsigned NOT NULL COMMENT '对方uno',
  `shape` enum('0','1','2') NOT NULL COMMENT '我的出拳 0:剪刀；1：石头；2：布包',
  `targetShape` enum('0','1','2') NOT NULL COMMENT '对方出拳 0:剪刀；1：石头；2：布包',
  `diamond` double(15,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '竞猜额度',
  `status` enum('0','1','2','3') NOT NULL DEFAULT '0' COMMENT '竞猜结果0：未结束； 1：平局；2：我胜；3：我败',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='竞猜列表';

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
