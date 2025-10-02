package com.healthylifestyle.BackEnd.model;

import java.math.BigDecimal;
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
    @Column(nullable = false)
    private BigDecimal price;

    // Constructor
    public Book(String title, String author, String urlImage, BigDecimal price) {
        this.title = title;
        this.author = author;
        this.urlImage = urlImage;
        this.price = price;
    }
    public Book() {} // required by JPA

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public String getUrlImage() { return urlImage; }
    public void setUrlImage(String urlImage) { this.urlImage = urlImage; }
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
}