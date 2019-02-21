/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.53-log : Database - game_mora
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`game_mora` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `game_mora`;

/*Table structure for table `game_diamond_exchange_order` */

DROP TABLE IF EXISTS `game_diamond_exchange_order`;

CREATE TABLE `game_diamond_exchange_order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '用户uid',
  `orderNO` char(24) NOT NULL COMMENT '订单编号',
  `diamond` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '钻石数量',
  `amount` decimal(20,8) unsigned NOT NULL DEFAULT '0.00000000' COMMENT '订单金额',
  `orderType` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '订单类型 1：vsc兑换钻石 2：钻石兑换vsc',
  `payType` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '支付类型',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '订单状态： 0 默认  2已支付 9 已完成',
  `content` varchar(100) NOT NULL DEFAULT '' COMMENT '订单备注',
  `datetime` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '添加时间',
  `payTime` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '支付时间',
  `finishTime` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '完成时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_orderNO` (`orderNO`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='钻石兑换订单';

/*Data for the table `game_diamond_exchange_order` */

/*Table structure for table `game_diamond_log` */

DROP TABLE IF EXISTS `game_diamond_log`;

CREATE TABLE `game_diamond_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `uid` int(10) unsigned NOT NULL COMMENT '我的uid',
  `join_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '关联业务id',
  `traget_uid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '对方uid',
  `type` enum('0','1') NOT NULL COMMENT '变更类型',
  `before_change` int(11) unsigned NOT NULL COMMENT '变更前数量',
  `change` int(10) unsigned NOT NULL COMMENT '变更数量',
  `after_change` int(11) NOT NULL COMMENT '变更后数量',
  `source` tinyint(3) unsigned NOT NULL COMMENT '来源原因0：svc兑换钻石，1：钻石兑换svc,2：竞猜胜出获得，3：竞猜失败损失，4：创建竞猜冻结钻石，5：取消对局返还钻石',
  `content` varchar(30) NOT NULL COMMENT '变更说明0：svc兑换钻石，1：钻石兑换svc,2：竞猜胜出获得，3：竞猜失败损失，4：下注冻结钻石，5：取消对局返还钻石',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT 'VSC兑换状态 0：默认 1：未到账，2：已到账',
  `vsc` int(10) NOT NULL DEFAULT '0' COMMENT 'VSC变更数量',
  `freeze_diamond` int(10) NOT NULL DEFAULT '0' COMMENT '冻结资产数量',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户钻石变更日志表';

/*Data for the table `game_diamond_log` */

/*Table structure for table `game_member` */

DROP TABLE IF EXISTS `game_member`;

CREATE TABLE `game_member` (
  `id` int(10) unsigned NOT NULL COMMENT '用户id',
  `user_name` varchar(30) NOT NULL COMMENT '用户昵称',
  `user_avatar` varchar(255) NOT NULL COMMENT '用户头像',
  `diamond` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '钻石数量',
  `token` varchar(50) NOT NULL COMMENT '用户token',
  `freeze_diamond` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '冻结钻石数量',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='竞猜用户表';

/*Data for the table `game_member` */

/*Table structure for table `game_mora_config` */

DROP TABLE IF EXISTS `game_mora_config`;

CREATE TABLE `game_mora_config` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '主键名',
  `index` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '序号',
  `value` varchar(20) NOT NULL COMMENT '数值',
  `content` varchar(30) NOT NULL COMMENT '内容描述',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`,`index`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='竞猜配置表';

/*Data for the table `game_mora_config` */

insert  into `game_mora_config`(`id`,`name`,`index`,`value`,`content`,`created_at`,`updated_at`) values (1,'grade',0,'10','一档竞猜金额','2019-01-21 21:48:55','2019-01-23 02:57:15'),(2,'grade',1,'20','二档竞猜金额','2019-01-21 21:49:02','2019-01-23 02:57:16'),(3,'grade',2,'50','三档竞猜金额','2019-01-21 21:49:05','2019-01-23 02:57:16'),(5,'grade',3,'100','四档竞猜金额','2019-01-21 21:49:34','2019-01-23 02:57:17'),(6,'grade',4,'200','五档竞猜金额','2019-01-21 21:49:48','2019-01-23 02:57:18'),(7,'grade',5,'500','六档竞猜金额','2019-01-21 21:50:00','2019-01-23 02:57:18'),(8,'grade',6,'1000','七档竞猜金额','2019-01-21 21:50:23','2019-01-23 02:57:19'),(9,'grade',7,'2000','八档竞猜金额','2019-01-21 21:50:34','2019-01-23 02:57:19'),(10,'grade',8,'5000','九档竞猜金额','2019-01-21 21:50:47','2019-01-23 02:57:20'),(11,'shape',0,'0','石头','2019-01-21 21:51:33','2019-01-21 22:18:30'),(12,'shape',1,'1','剪刀','2019-01-21 21:51:30','2019-01-21 22:18:29'),(13,'shape',2,'2','布','2019-01-21 21:55:44','2019-01-21 22:18:33'),(14,'rate',0,'0.1','竞猜费率：比赛总金额参与计算','2019-01-24 02:02:33','2019-01-29 18:37:14'),(16,'exchangeRate',0,'1','vsc/钻石 VSC与钻石兑换比率','0000-00-00 00:00:00','2019-01-30 09:54:53'),(17,'exchangeUid',0,'1','竞猜获得手续费结算到该uid账户','0000-00-00 00:00:00','2019-01-26 12:40:23'),(18,'maxWithdrawTimes',0,'20','单日最大提现次数','0000-00-00 00:00:00','2019-01-31 19:05:46');

/*Table structure for table `game_notice` */

DROP TABLE IF EXISTS `game_notice`;

CREATE TABLE `game_notice` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(10) unsigned NOT NULL COMMENT '用户uid',
  `content` varchar(255) NOT NULL COMMENT '消息内容',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '消息类型',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '已读状态0：未读（默认）1：已读',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `game_notice` */

/*Table structure for table `game_order_mora` */

DROP TABLE IF EXISTS `game_order_mora`;

CREATE TABLE `game_order_mora` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(10) unsigned NOT NULL COMMENT '我的uid',
  `target_uid` int(10) unsigned DEFAULT NULL COMMENT '对方uid',
  `shape` tinyint(4) NOT NULL COMMENT '我的出拳 0:石头；1：剪刀；2：布',
  `target_shape` tinyint(4) DEFAULT NULL COMMENT '对方出拳 0:石头；1：剪刀；2：布',
  `grade` tinyint(3) unsigned NOT NULL COMMENT '竞猜档次',
  `diamond_number` int(10) unsigned NOT NULL COMMENT '竞猜钻石数量',
  `status` enum('0','1','2','3') NOT NULL DEFAULT '0' COMMENT '竞猜状态0：等待竞猜(默认) 1：竞猜中 2：平局；3：我胜；4：我败',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='竞猜列表';

/*Data for the table `game_order_mora` */

/*Table structure for table `game_record_log` */

DROP TABLE IF EXISTS `game_record_log`;

CREATE TABLE `game_record_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '战绩id',
  `order_id` int(10) unsigned NOT NULL COMMENT '房间id',
  `room_owner_id` int(10) unsigned NOT NULL COMMENT '房主id',
  `uid` int(10) unsigned NOT NULL COMMENT '我的uid',
  `target_uid` int(10) unsigned NOT NULL COMMENT '对方uid',
  `grade` tinyint(3) unsigned NOT NULL COMMENT '竞猜等级',
  `diamond_number` int(10) unsigned NOT NULL COMMENT '竞猜金额',
  `res_diamond` int(11) NOT NULL COMMENT '竞猜所得金额',
  `shape` tinyint(4) NOT NULL COMMENT '我的出拳 0:石头；1：剪刀；2：布',
  `target_shape` tinyint(4) DEFAULT NULL COMMENT '对方出拳 0:石头；1：剪刀；2：布',
  `status` enum('2','3','4') NOT NULL COMMENT '精彩结果2：平局，3：胜，4：负',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `game_record_log` */

/*Table structure for table `game_task` */

DROP TABLE IF EXISTS `game_task`;

CREATE TABLE `game_task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(10) unsigned NOT NULL COMMENT '用户id',
  `join_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '关联业务id',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '任务类型1.VSC兑换钻石 2.钻石兑换VSC',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '任务执行状态0：未完成（默认）1：已经完成',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '任务创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '任务更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `game_task` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
