create table workInfo(
	id int(4) primary key not null unique auto_increment,
	name varchar(20) not null,
	type varchar(10),
	address varchar(50),
	wages year,
	contents tinytext,
	extra text
);

create index index_name on workInfo(name);

alter table workInfo add index index_t(type, address);

alter table workInfo engine = MyISAM;

alter table workInfo add index index_ext(extra);

create index index_id on workInfo(id);
drop index index_id on workInfo;



create table studentInfo(
	number int(4) primary key not null unique,
	name varchar(20) not null,
	major varchar(20),
	age int(4)
);

create view college_view(
	number as student_num,
	name as student_name,
	age as student_age,
	major as department
);

show create view college_view \G;

insert into college_view values
	(0901, `张三`, 20, `外语`),
	(0902, `李四`, 22, `计算机`),
	(0903, `王五`, 19, `计算机`);

update college_view where major=`计算机`;

drop view college_view;