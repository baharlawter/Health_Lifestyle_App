package com.healthylifestyle.blogapi.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.healthylifestyle.blogapi.model.Comments;
import com.healthylifestyle.blogapi.repository.CommentsRepository;

@RestController
@RequestMapping("/api/comments")
public class CommentsController {
    private final CommentsRepository commentsRepository;

    public CommentsController(CommentsRepository commentsRepository){
        this.commentsRepository = commentsRepository;
    }

    // POST: Save a new comment (with rating)
    @PostMapping
    public Comments createComment(@RequestBody Comments comment){
        return commentsRepository.save(comment);
    }

    // GET: Return all comments with reating
    @GetMapping
    public List<Comments> getAllComments(){
        return commentsRepository.findAll();
    }
}