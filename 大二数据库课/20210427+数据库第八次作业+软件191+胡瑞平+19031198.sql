/*

20210427 数据库第八次作业 软件191 胡瑞平 19031198

*/

select c_name, grade from student, score where name = `李五一`;

select * from student, score;

select name, sum(grade) from student, score;

select name from student, score where c_name = `计算机` and grade < 95;

select * from student, score where c_name = `计算机` and c_name = `英语`;