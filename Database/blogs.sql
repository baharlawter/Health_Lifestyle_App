create table blogs(
id int auto_increment primary key,
title varchar (255) not null,
image_url varchar(255),
blog_content text );
insert into blogs(title, image_url, blog_content) values
("Exercise Daily", "https://images.unsplash.com/photo-1648659487787-79db84e9b2e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ","Exercise is essential for maintaining a healthy body and mind. It strengthens muscles, improves heart health, and boosts endurance, making daily activities easier. Regular movement helps control weight, reduce stress, and enhance mood by releasing feel-good hormones."),
("Intermittent Fasting", "https://images.unsplash.com/photo-1532301791573-4e6ce86a085f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"     ,       "Intermittent fasting is a popular eating pattern that cycles between periods of eating and fasting. It can help with weight management, blood sugar control, and cellular repair by allowing the body to burn stored fat more efficiently."),

("Quitting Added Sugar", "https://images.unsplash.com/photo-1628619876503-2db74e724757?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "    ,        "Added sugar can have serious effects on health, contributing to weight gain, heart disease, and increased risk of diabetes. Excess sugar consumption can lead to inflammation, disrupt metabolism, and even accelerate skin aging2."),

("Eating Healthy","https://images.unsplash.com/photo-1565895405139-e188df996e0b?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "    ,      "Eating healthy fuels your body with the nutrients it needs to function at its best. A balanced diet supports strong immunity, steady energy, and better digestion—while helping to maintain a healthy weight and reduce the risk of chronic diseases like heart disease and diabetes. ")
 
