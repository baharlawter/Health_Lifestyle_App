SELECT * FROM healthy_lifestyle_db.order_items;
create table users(
id int primary key auto_increment,
username varchar (250) unique not null,
password varchar (250) not null,
email varchar (100) unique)


