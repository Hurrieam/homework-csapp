/*

20210420 数据库第七次作业 软件191 胡瑞平 19031198

*/

create database bumeninfo;

use bumeninfo;

create table bumen(
    d_id int(4)not null unique primary key,
    d_name varchar(20)not null unique,
    functions varchar(20),
    address varchar(20)
);

desc bumen;

create table yuangong(
    id int(4) not null unique primary key,
    name varchar(20) not null,
    sex varchar(4) not null,
    birthday int(4),
    d_id int(4) not null,
    salary float,
    address varchar(50),
    constraint yuangong_fk foreign key(d_id)
    references bumen(d_id)
);

desc yuangong;

insert into bumen values(1001,'人事部','人事管理','北京');
insert into bumen values(1002,'科研部','研发产品','北京');
insert into bumen values(1003,'生产部','产品生产','天津');
insert into bumen values(1004,'销售部','产品销售','上海');
insert into yuangong values(8001,'韩鹏','男',25,1002,4000,'北京市海淀区');
insert into yuangong values(8002,'张峰','男',26,1001,2500,'北京市昌平区');
insert into yuangong values(8003,'欧阳','男',20,1003,1500,'湖南省永州市');
insert into yuangong values(8004,'王武','男',30,1001,3500,'北京市顺义区');
insert into yuangong values(8005,'欧阳宝贝','女',21,1002,3000,'北京市昌平区');
insert into yuangong values(8006,'呼延','man',28,1003,1800,'天津市南开区');

select * from yuangong;

select * from yuangong where id >= 8004 and id <= 8005;

select d_id, d_name, function from bumen;

select name from yuangong where birthday >= 25 and birthday <= 30;

select d_name, count(d_name) from bumen group by d_id;

select d_name, max(salary) from yuangong group by d_id;

select d_name, sum(salary) from yuangong group by d_id;

select * from yuangong order by salary desc;

select name, birthday, address from yuangong where address like `北京%`;

create table student(
    num int(10) primary key not null unique,
    name varchar(20) not null,
    sex varchar(40) not null,
    birthday year,
    bumen varchar(20) not null,
    address varchar(50)
);

create table score(
    id int(10) primary key not null unique,
    c_name varchar(20),
    stu_id int(10) not null,
    grade int(10),
    constraint stu_id_fk foreign key(stu_id)
    references student(num)
);

insert into student values
(901,`张军`,`男`,1985,`计算机系`,`北京市海淀区`),
(902,`张超`,`男`,1986,`中文系`,`北京市昌平区`),
(903,`张美`,`女`,1990,`中文系`,`湖南省永州市`),
(904,`李五一`,`男`,1990,`英语系`,`辽宁省阜新市`),
(905,`王芳`,`女`,1991,`英语系`,`福建省厦门市`),
(906,`王桂`,`男`,1988,`计算机系`,`湖南省衡阳市`)
;

insert into score values
(901,`计算机`,98),
(901,`英语`,80),
(902,`计算机`,65),
(902,`中文`,88),
(903,`中文`,95),
(904,`计算机`,70),
(904,`英语`,92),
(905,`英语`,94),
(906,`计算机`,90),
(906,`英语`,85)
;

select * from student;

select * from student where num between 2 and 4;

select num, name, bumen from student;

select * from student where bumen = `计算机系` or bumen = `英语系`;

select * from student where 2021-birthday between 28 and 32;

select bumen as sum_of_bumen, count(bumen) from student;

select c_name, max(grade) from score;

select c_name, average(grade) from score;

select * from score where c_name = `计算机` order by grade;