package com.healthylifestyle.UI.service;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.healthylifestyle.UI.model.Comments;
import com.healthylifestyle.UI.repository.CommentsRepository;


@Service
public class CommentsService {
    
    private final CommentsRepository commentsRepository;
    public CommentsService(CommentsRepository commentsRepository){
        this.commentsRepository = commentsRepository;
    }
    public List<Comments> getAllComments(){
        return commentsRepository.findAll();
    }
    public Optional<Comments> findById(Long id){
        return commentsRepository.findById(id);
    }
    public Comments savedComment(Comments comment){
        return commentsRepository.save(comment);
    }
    public void deleteById(Long id){
        commentsRepository.deleteById(id);
    }
   
    
    public Comments updateComment(Long id, Comments updateComment) {
    Comments comment = commentsRepository.findById(id).orElse(null);
    if (comment == null) return null;
    if (!comment.getEmail().trim().equalsIgnoreCase(updateComment.getEmail().trim())) {
        throw new IllegalArgumentException("You can only edit your own comments");
    }
    comment.setContent(updateComment.getContent());
    comment.setRating(updateComment.getRating());
    return commentsRepository.save(comment);
}

public boolean deleteComment(Long id, String email) {
    Comments comment = commentsRepository.findById(id).orElse(null);
    if (comment == null) return false;
    if (!comment.getEmail().trim().equalsIgnoreCase(email.trim())) {
        throw new IllegalArgumentException("You can only delete your own comments");
    }
    commentsRepository.deleteById(id);
    return true;
}}