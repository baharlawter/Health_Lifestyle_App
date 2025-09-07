package com.healthylifestyle.blogapi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthylifestyle.blogapi.model.Blog;
import com.healthylifestyle.blogapi.service.BlogService;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {
    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping
    public List<Blog> getAllBlogs() {
        return blogService.getAllBlogs();
    }
    @GetMapping("/{id}")
    public Optional<Blog> getBlogById(@PathVariable Long id) {
        return blogService.getBlogById(id);
    }

    
}
