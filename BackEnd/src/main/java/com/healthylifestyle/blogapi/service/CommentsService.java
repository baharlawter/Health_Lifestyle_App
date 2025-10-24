package com.healthylifestyle.blogapi.service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.healthylifestyle.blogapi.model.Comments;
import com.healthylifestyle.blogapi.repository.CommentsRepository;


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
        //for authentication set the user email when creating 
        comment.setCreatedAt(LocalDateTime.now());
        comment.setUpdatedAt(LocalDateTime.now());
        return commentsRepository.save(comment);
    }
    public void deleteById(Long id){
        commentsRepository.deleteById(id);
    }
   
    //update method with authentication
    public Comments updateComment(Long id, Comments updateComment,String userEmail) {
    
    Comments existingComment=commentsRepository.findById(id).orElse(null);
   
    if (!existingComment.isOwnedByEmail(userEmail)){
        throw new IllegalArgumentException("You can only update our own comments");
    }

existingComment.setContent(updateComment.getContent());
existingComment.setRating(updateComment.getRating());
existingComment.setUpdatedAt(LocalDateTime.now());
return commentsRepository.save(existingComment);}

//this is deletes method with authentication

public boolean deleteComment(Long id, String userEmail) {
    Comments comment = commentsRepository.findById(id).orElse(null);
    if (comment == null) return false;
    //this is checkin if the owner owns the comment
    if (!comment.isOwnedByEmail(userEmail)){
        throw new IllegalArgumentException("You can only delete your own comments");
    }
    commentsRepository.deleteById(id);
    return true;
}}