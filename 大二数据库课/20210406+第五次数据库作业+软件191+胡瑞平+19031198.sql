/*

20210406 第五次数据库作业 软件191 胡瑞平 19031198

*/

create database `schoolInfo`;

use `schoolInfo`;

create table `schoolInfo`.`teacherInfo`(
    `id` int(4) primary key not null unique auto_increment,
    `num` int(10) not null unique,
    `name` varchar(20) not null,
    `sex` varchar(4) not null,
    `birthday` datetime,
    `address` varchar(50)
);

alter table `schoolInfo`.`teacherInfo` modify `name` varchar(30);

alter table `schoolInfo`.`teacherInfo` modify `birthday` datetime after `name`;

alter table `schoolInfo`.`teacherInfo` change `num` `t_id` int(10) not null unique;

alter table `schoolInfo`.`teacherInfo` drop `address`;

alter table `schoolInfo`.`teacherInfo` add `wages` float;

alter table `schoolInfo`.`teacherInfo` rename to `schoolInfo`.`teacherInfoInfo`;

create database `staffInfo`;

use `staffInfo`;

create table `staffInfo`.`department`(
    `d_id` int(4) primary key not null unique,
    `d_name` varchar(20) not null unique,
    `function` varchar(50),
    `address` varchar(20)
);

create table `staffInfo`.`worker`(
    `id` int(4) primary key not null unique auto_increment,
    `num` int(10) not null unique,
    `d_id` int(4),
    `name` varchar(20) not null,
    `sex` varchar(4) not null,
    `birthday` date,
    `address` varchar(50),
    
    foreign key(`d_id`) references `staffInfo`.`department`
);

drop table `staffInfo`.`department`;

alter table `staffInfo`.`worker` drop foreign key `d_id`;

drop table `staffInfo`.`department`;

/*

3. 
关于NOT NULL：
(1) 防止数据项为空
(2) 不能，主键是唯一标识且不能重复，如果为空，就无法识别。

关于外码：
(1) 可以设置成功。外键用来在两个表的数据之间建立联系，它可以是一列或者多列。一个表可以有一个或者多个外键。子表外键字段的取值，要么是NULL，要么是父表主键字段的取值，且关联字段的数据类型必须匹配。
(2) 如果试图直接插入或者修改子表的“外键值”，子表中的“外键值”必须是父表中的“主键值”，要么是NULL，否则插入或者修改将操作失败。
(3) 可以。主表与从表之间，以关联值为关键字，建立相关表之间的联系。与创建顺序无关。

关于主码和唯一约束：
(1) 唯一性约束要求该列唯一，允许为空，但只能出现一个空值。如果某个字段满足唯一性约束要求，则可以向该字段添加唯一性约束。与主键约束不同，一张表中可以存在多个唯一性约束，并且满足唯一性约束的字段可以取NULL值。
(2) 一张表只能设置一个主码，可以设置多个唯一约束。

*/