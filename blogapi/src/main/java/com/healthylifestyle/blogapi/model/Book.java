package com.healthylifestyle.blogapi.model;


import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Book {
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String author;
    @Column(name="url_image")
    private String urlImage;
   
//constructor
    public Book(String title, String author, String urlImage) {
        this.title = title;
        this.author = author;
        this.urlImage = urlImage;
    }
    public Book() {}//requried by JPA

//getters and setters
    public Long getId() { return id;
    }
    public void setId(Long id) {this.id = id;
    }
    public String getTitle() {return title;
    }
    public void setTitle(String title) {this.title = title;
    }
    public String getAuthor() {return author;
    }
    public void setAuthor(String author) {this.author = author;
    }
    public String getUrlImage() { return urlImage;
    }
    public void setUrlImage(String urlImage) {this.urlImage = urlImage;
    }}