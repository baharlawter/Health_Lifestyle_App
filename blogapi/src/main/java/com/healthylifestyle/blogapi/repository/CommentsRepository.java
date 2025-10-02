package com.healthylifestyle.BackEnd.repository;
import com.healthylifestyle.BackEnd.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentsRepository extends JpaRepository<Comments, Long> {

   
}
