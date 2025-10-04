SELECT * FROM healthy_lifestyle_db.blogs;
create table books (
id int primary key auto_increment,
title varchar (255),
author varchar(255),
url_image varchar(500)
);
INSERT INTO books (title, author, url_image) VALUES
('The Diabetes Code', 'Jason Fung', 'https://m.media-amazon.com/images/I/51s-ZUtWf0L._SY342_.jpg'),
('The Diabetes Code Cookbook', 'Jason Fung', 'https://m.media-amazon.com/images/I/91KMkegoY6L._SY342_.jpg'),
('YOUR GUT IS YOUR SECOND BRAIN', 'Orlando Wright', 'https://m.media-amazon.com/images/I/61nCRt654bL._SY342_.jpg'),
('100 No-Equipment Workouts', 'Neila Rey', 'https://m.media-amazon.com/images/I/61EXIDDIyaL._SY342_.jpg');
select *from books;
update books 
set title ="Your Gut Is Your Second Brain"
where title = "YOUR GUT IS YOUR SECOND BRAIN";