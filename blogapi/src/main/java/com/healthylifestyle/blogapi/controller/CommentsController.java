package com.healthylifestyle.blogapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
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

    // GET: Return all comments with rating
    @GetMapping
    public List<Comments> getAllComments(){
        return commentsRepository.findAll();
    }

    // PUT: Update a comment by ID
    @PutMapping("/{id}")
    public ResponseEntity<Comments> updateComment(@PathVariable Long id, @RequestBody Comments updatedComment) {
        Comments comment = commentsRepository.findById(id).orElse(null);
        if (comment == null) {
            return ResponseEntity.notFound().build();
        }
        comment.setText(updatedComment.getText());
        comment.setRating(updatedComment.getRating());
        Comments savedComment = commentsRepository.save(comment);
        return ResponseEntity.ok(savedComment);
    }

    // DELETE: Delete a comment by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable Long id) {
        if (!commentsRepository.existsById(id)){
            return ResponseEntity.status(404).body("Comment not found");
        }
        commentsRepository.deleteById(id);
        return ResponseEntity.ok("Comment deleted successfully :)!");
    }
}