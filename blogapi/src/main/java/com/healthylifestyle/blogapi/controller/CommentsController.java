package com.healthylifestyle.BackEnd.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.healthylifestyle.BackEnd.model.Comments;
import com.healthylifestyle.BackEnd.service.CommentsService;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "http://localhost:5173")
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
    public ResponseEntity<?> updateComment(
            @PathVariable Long id,
            @RequestBody Comments updateComment) {
        try {
            Comments savedComment = commentsService.updateComment(id, updateComment);
            if (savedComment == null) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(savedComment);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(403).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(
            @PathVariable Long id,
            @RequestParam String email) {
        try {
            boolean deleted = commentsService.deleteComment(id, email);
            if (!deleted) return ResponseEntity.status(404).body("Comment not found");
            return ResponseEntity.ok("Comment deleted successfully :)!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(403).body(e.getMessage());
        }
    }
}