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
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `uno` int(10) unsigned NOT NULL COMMENT '我的uno',
  `traget_uno` int(10) unsigned NOT NULL COMMENT '对方uno',
  `type` enum('0','1') NOT NULL COMMENT '变更类型',
  `change` double(15,2) unsigned NOT NULL COMMENT '变更数量',
  `content` varchar(30) NOT NULL COMMENT '变更说明',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户钻石变更日志表';

/*Data for the table `mge_diamond_log` */

/*Table structure for table `mge_member` */

DROP TABLE IF EXISTS `mge_member`;

CREATE TABLE `mge_member` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `uno` int(10) NOT NULL COMMENT '用户uno',
  `user_name` varchar(30) NOT NULL COMMENT '用户昵称',
  `user_avatar` varchar(255) NOT NULL COMMENT '用户头像',
  `diamond` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '钻石数量',
  `freeze_diamond` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '冻结钻石数量',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`uno`),
  UNIQUE KEY `id` (`id`,`uno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='竞猜用户表';

/*Data for the table `mge_member` */

/*Table structure for table `mge_mora_config` */

DROP TABLE IF EXISTS `mge_mora_config`;

CREATE TABLE `mge_mora_config` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '主键名',
  `index` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '序号',
  `value` varchar(20) NOT NULL COMMENT '数值',
  `content` varchar(30) NOT NULL COMMENT '内容描述',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`,`index`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COMMENT='竞猜配置表';

/*Data for the table `mge_mora_config` */

insert  into `mge_mora_config`(`id`,`name`,`index`,`value`,`content`,`created_at`,`updated_at`) values (1,'grade',0,'10','一档竞猜金额','2019-01-21 21:48:55','2019-01-21 22:18:03'),(2,'grade',1,'20','二档竞猜金额','2019-01-21 21:49:02','2019-01-21 22:18:05'),(3,'grade',2,'50','三档竞猜金额','2019-01-21 21:49:05','2019-01-21 22:18:08'),(5,'grade',3,'100','四档竞猜金额','2019-01-21 21:49:34','2019-01-21 22:18:13'),(6,'grade',4,'200','五档竞猜金额','2019-01-21 21:49:48','2019-01-21 22:18:17'),(7,'grade',5,'500','六档竞猜金额','2019-01-21 21:50:00','2019-01-21 22:18:20'),(8,'grade',6,'1000','七档竞猜金额','2019-01-21 21:50:23','2019-01-21 22:18:22'),(9,'grade',7,'2000','八档竞猜金额','2019-01-21 21:50:34','2019-01-21 22:18:24'),(10,'grade',8,'5000','九档竞猜金额','2019-01-21 21:50:47','2019-01-21 22:18:27'),(11,'shape',0,'0','石头','2019-01-21 21:51:33','2019-01-21 22:18:30'),(12,'shape',1,'1','剪刀','2019-01-21 21:51:30','2019-01-21 22:18:29'),(13,'shape',2,'2','布','2019-01-21 21:55:44','2019-01-21 22:18:33');

/*Table structure for table `mge_order_mora` */

DROP TABLE IF EXISTS `mge_order_mora`;

CREATE TABLE `mge_order_mora` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uno` int(10) unsigned NOT NULL COMMENT '我的uno',
  `target_uno` int(10) unsigned NOT NULL COMMENT '对方uno',
  `shape` tinyint(4) NOT NULL COMMENT '我的出拳 0:石头；1：剪刀；2：布',
  `target_shape` tinyint(4) NOT NULL COMMENT '对方出拳 0:石头；1：剪刀；2：布',
  `grade` tinyint(3) unsigned NOT NULL COMMENT '竞猜档次',
  `diamond_number` int(10) unsigned NOT NULL COMMENT '竞猜钻石数量',
  `status` enum('0','1','2','3') NOT NULL DEFAULT '0' COMMENT '竞猜状态0：等待竞猜(默认) 1：竞猜中 2：平局；3：我胜；4：我败',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='竞猜列表';

/*Data for the table `mge_order_mora` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
