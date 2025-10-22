package com.healthylifestyle.blogapi.model;


import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "comments")
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    @Column(name = "rating")
    private int rating;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;
  //for security so other people cant edit other's comment
  @Column(name="user_email")
  private String userEmail;

  @Column(name="created_at")
  private LocalDateTime createdAt;

  @Column(name="updated_at")
  private LocalDateTime updatedAt;
  
    

    // Default constructor required by JPA
    public Comments() {}
//Constructor
    public Comments(String name, String email, int rating, String content) {
        this.name = name;
        this.email = email;
        this.rating=rating;
        this.content = content;
        this.createdAt=LocalDateTime.now();
        this.updatedAt=LocalDateTime.now();
        

    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

 public int getRating(){return rating;}
    public void setRating(int rating){this.rating=rating;}

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

   public String getUserEmail(){return userEmail;}
   public void setUserEmail(String userEmail){this.userEmail=userEmail;
   }
   //method to check the email ownership
   public boolean isOwnedByEmail(String email){
    return this.userEmail!=null && this.userEmail.equals(email);
   }

   public LocalDateTime getCreatedAt() { return this.createdAt; }
   public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
   public LocalDateTime getUpdatedAt() { return this.updatedAt; }
   public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}