package com.healthylifestyle.blogapi.service;

// import java.lang.foreign.Linker.Option;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.healthylifestyle.blogapi.model.Blog;
import com.healthylifestyle.blogapi.repository.BlogRepository;

@Service
public class BlogService {
    private final BlogRepository blogRepository;

    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public List<Blog> getAllBlogs() {
        return List.of(
            new Blog(
                "10 Tips for a Healthy Lifestyle",
                "https://images.unsplash.com/photo-healthy-lifestyle.jpg",
                "Discover practical tips to improve your daily habits, boost your energy, and maintain a balanced lifestyle. From nutrition to exercise, these strategies will help you achieve your wellness goals."
            ),
            new Blog(
                "The Benefits of Morning Exercise",
                "https://images.unsplash.com/photo-morning-exercise.jpg",
                "Learn how starting your day with physical activity can improve your mood, increase productivity, and set a positive tone for the rest of your day."
            )
        );
        //return blogRepository.findAll();
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

}
