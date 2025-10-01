package com.healthylifestyle.blogapi.service;

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
        return commentsRepository.save(comment);
    }

    public void deleteById(Long id){
        commentsRepository.deleteById(id);
    }
   
    public boolean existsById(Long id) {
        return commentsRepository.existsById(id);
    }
}