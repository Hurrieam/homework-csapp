/*

20210413 数据库第六次作业 软件191 胡瑞平 19031198

*/

create table food(
    foodid int(4) not null unique auto_increment primary key,
    name varchar(20) not null,
    company varchar(20) not null,
    price float not null,
    product_time year,
    validity_time int(4),
    address varchar(50)
);

insert into food values
(null, `QQ饼干`, `QQ饼干厂`, 2.5, `2019`, 3, `北京`),
(null, `MN牛奶`, `MN牛奶厂`, 3.5, `2021`, 1, `河北`),
(null, `EE果冻`, `EE果冻厂`, 1.5, `2017`, 2, `北京`),
(null, `FF咖啡`, `FF咖啡厂`, 20, `2020`, 5, `天津`),
(null, `GG奶糖`, `GG奶糖`,14, `2019`, 3, `广东`);

update food set address = `内蒙古`, price = 3.2 where company = `MN牛奶厂`;

update food set validity_time = 5 where address = `北京`;

delete from food where 2021 - product_time > validity_time;

delete from food where address = `北京`;