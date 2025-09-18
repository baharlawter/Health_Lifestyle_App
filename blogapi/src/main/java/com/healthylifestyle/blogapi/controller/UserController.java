package com.healthylifestyle.blogapi.controller;
import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.healthylifestyle.blogapi.model.User; 
import com.healthylifestyle.blogapi.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody Map<String, String> loginData) {
        User user = userRepository.findByUsername(loginData.get("username"));
        if (user != null && user.getPassword().equals(loginData.get("password"))) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }
}