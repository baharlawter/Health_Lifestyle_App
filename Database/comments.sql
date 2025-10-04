SELECT * FROM healthy_lifestyle_db.books;
create table comments(
id int auto_increment primary key,
name varchar(100) not null,
email varchar(250) not null,
content text not null);
