package com.healthylifestyle.BackEnd.service;


import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.healthylifestyle.BackEnd.model.Blog;
import com.healthylifestyle.BackEnd.repository.BlogRepository;


@Service
public class BlogService {
    //dependency injection with a constructor
    private final BlogRepository blogRepository;
    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    // Fetch all blogs from the database
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

       
    public Optional<Blog> getBlogById(Long id) {
        return blogRepository.findById(id);
    }

    public Blog saveBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    public void deleteBlog(Long id) {
        blogRepository.deleteById(id);
    }

    public BlogRepository getBlogRepository() {
        return blogRepository;
    }}


