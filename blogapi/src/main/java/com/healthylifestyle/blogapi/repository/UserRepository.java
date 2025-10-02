package com.healthylifestyle.BackEnd.repository;

import com.healthylifestyle.BackEnd.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}