package com.healthylifestyle.blogapi.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthylifestyle.blogapi.model.Comments;
import com.healthylifestyle.blogapi.repository.CommentsRepository;


@RestController
@RequestMapping("/api/comments")
public class CommentsController {
    private final CommentsRepository commentsRepository;

    public CommentsController(CommentsRepository commentsRepository){
        this.commentsRepository = commentsRepository;
    }

    // POST: Save a new comment
    @PostMapping
    public Comments createComment(@RequestBody Comments comment){
        return commentsRepository.save(comment);
    }

    // GET: Return all comments
    @GetMapping
    public List<Comments> getAllComments(){
        return commentsRepository.findAll();
    }
}