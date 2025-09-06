package com.healthylifestyle.blogapi.model;

import jakarta.persistence.*;

@Entity
@Table(name="blogs")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(name="image_url")
    private String imageUrl;
    @Column(name="blog_content", columnDefinition="TEXT")
    private String blogContent;


    // constructor
    public Blog(String title, String imageUrl, String blogContent) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.blogContent = blogContent;
    }

    public Blog() {
        // Required by JPA
    }

    // Getters and setters 
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getBlogContent() { return blogContent; }
    public void setBlogContent(String blogContent) { this.blogContent = blogContent; }
}
