package com.healthylifestyle.blogapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.healthylifestyle.blogapi.model.Comments;
import com.healthylifestyle.blogapi.service.CommentsService;

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
    public ResponseEntity<?> createComment(@RequestBody Comments comment) {
        // Validate that userEmail is provided
        if (comment.getUserEmail() == null || comment.getUserEmail().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("User email is required");
        }
        
        Comments savedComment = commentsService.savedComment(comment);
        return ResponseEntity.ok(savedComment);
    }
@PutMapping("/{id}")
    public ResponseEntity<?> updateComment(
            @PathVariable Long id,
            @RequestBody Comments updateComment,
            @RequestHeader("User-Email") String userEmail) { // Get email from header
        
        try {
            Comments savedComment = commentsService.updateComment(id, updateComment, userEmail);
            if (savedComment == null) {
                return ResponseEntity.status(org.springframework.http.HttpStatus.NOT_FOUND).body("Comment not found");
            }
            return ResponseEntity.ok(savedComment);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(403).body(e.getMessage());
        }
    }

  @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(
            @PathVariable Long id,
            @RequestHeader("User-Email") String userEmail) { // Get email from header, not URL
        
        try {
            boolean deleted = commentsService.deleteComment(id, userEmail);
            if (!deleted) {
                return ResponseEntity.status(404).body("Comment not found");
            }
            return ResponseEntity.ok("Comment deleted successfully!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(403).body(e.getMessage());
        }
    }
}