# 20210508 数据库第十次作业 软件191 胡瑞平 19031198

# 建立学生信息表student
create table student(
	sno varchar(20) not null primary key,
	sname varchar(20) not null,
	ssex varchar(20) not null,
	sbirthday datetime,
	class varchar(20)
);

# 建立教师信息表teacher
create table teacher(
	tno varchar(20) not null primary key,
	tname varchar(20) not null,
	tsex varchar(20) not null,
	tbirthday datetime,
	prof varchar(20),
	depart varchar(20) not null
);

# 建立课程信息表course
create table course(
	cno varchar(20) not null primary key,
	cname varchar(20) not null,
	tno varchar(20) not null,
	foreign key(tno) references teacher(tno)
);

# 建立成绩信息表score
create table score(
	id int auto_increment primary key,
	sno varchar(20) not null,
	foreign key(sno) references student(sno),
	cno varchar(20) not null,
	foreign key(cno) references course(cno),
	degree decimal
);

# 添加学生信息
insert into student values('108', '曾华', '男', '1977-09-01', '95033');
insert into student values('105', '匡明', '男', '1975-10-02', '95031');
insert into student values('107', '王丽', '女', '1976-01-23', '95033');
insert into student values('101', '李军', '男', '1976-02-20', '95033');
insert into student values('109', '王芳', '女', '1975-02-10', '95031');
insert into student values('103', '陆君', '男', '1974-06-03', '95031');

# 添加教师信息
insert into teacher values('804', '李诚', '男', '1958-12-02', '副教授', '计算机系');
insert into teacher values('856', '张旭', '男', '1969-03-12', '讲师', '电子工程系');
insert into teacher values('825', '王萍', '女', '1972-05-05', '助教', '计算机系');
insert into teacher values('831', '刘冰', '女', '1977-08-14', '助教', '电子工程系');

# 添加课程信息
insert into course values('3-105', '计算机导论', '825');
insert into course values('3-245', '操作系统', '804');
insert into course values('6-166', '数字电路', '856');
insert into course values('9-888', '高等数学', '831');

# 添加成绩信息
insert into score values(1,'103', '3-245', '86');
insert into score values(2,'105', '3-245', '75');
insert into score values(3,'109', '3-245', '68');
insert into score values(4,'103', '3-105', '92');
insert into score values(5,'105', '3-105', '88');
insert into score values(6,'109', '3-105', '76');
insert into score values(7,'103', '3-105', '64');
insert into score values(8,'105', '3-105', '91');
insert into score values(9,'109', '3-105', '78');
insert into score values(10,'103', '6-166', '85');
insert into score values(11,'105', '6-166', '79');
insert into score values(12,'109', '6-166', '81');





# 1~5

select sname, ssex, class from student;

select depart from teacher;

select * from student;

select * from score where degree between 60 and 80;

select * from score where degree = 85 or degree = 86 or degree = 88;

# 6~10

select * from student where class = '95031' or ssex = '女';

select * from student order by class desc;

select * from score order by cno asc, degree desc;

select sum(sname) where class = '95031';

select max(degree), sno, cno from score;

# 11~15

select cname, avg(degree) from score, course;

# 12

select sno from score where degree between 70 and 90;

select sname, cno, degree from student, course, score;

select sno, cname, degree from student, course, score;

# 16~20

select sname, cname, degree from student, course, score;

select avg(degree) from score, student where class = '95033';

# 18

# 19

# 20

# 21~25

# 21

# 22

# 23

# 24

# 25

# 26~30

# 26

# 27

# 28

# 29

# 30

# 31~35

# 31

# 32

# 33

# 34

# 35

# 36~40

# 36

# 37

# 38

# 39

# 40

# 41~45

# 41

# 42

# 43

# 44

# 45