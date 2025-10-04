package com.healthylifestyle.blogapi.repository;

import com.healthylifestyle.blogapi.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {

}
