package com.healthylifestyle.blogapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.healthylifestyle.blogapi.model.Comments;
import com.healthylifestyle.blogapi.service.CommentsService;

@RestController
@RequestMapping("/api/comments")
public class CommentsController {
    private final CommentsService commentsService;

    public CommentsController(CommentsService commentsService){
        this.commentsService = commentsService;
    }

    @GetMapping
    public List<Comments> getAllComments(){
        return commentsService.getAllComments();
    }

    @PostMapping
    public Comments createComment(@RequestBody Comments comment){
        return commentsService.savedComment(comment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comments> updateComment(@PathVariable Long id, @RequestBody Comments updateComment) {
        Comments comment = commentsService.findById(id).orElse(null);
        if (comment == null) {
            return ResponseEntity.notFound().build();
        }
        comment.setContent(updateComment.getContent());
        comment.setRating(updateComment.getRating());
        Comments savedComment = commentsService.savedComment(comment);
        return ResponseEntity.ok(savedComment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable Long id) {
        if (!commentsService.existsById(id)){
            return ResponseEntity.status(404).body("Comment not found");
        }
        commentsService.deleteById(id);
        return ResponseEntity.ok("Comment deleted successfully :)!");
    }
}