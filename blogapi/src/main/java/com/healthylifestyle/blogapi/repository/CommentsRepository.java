package com.healthylifestyle.blogapi.repository;
import com.healthylifestyle.blogapi.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentsRepository extends JpaRepository<Comments, Long> {
}
