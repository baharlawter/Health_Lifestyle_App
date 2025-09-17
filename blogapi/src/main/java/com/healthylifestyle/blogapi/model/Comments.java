package com.healthylifestyle.blogapi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "comments")
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    // Default constructor required by JPA
    public Comments() {}

    public Comments(String name, String email, String content) {
        this.name = name;
        this.email = email;
        this.content = content;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}