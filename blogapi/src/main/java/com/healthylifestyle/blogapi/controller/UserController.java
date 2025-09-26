package com.healthylifestyle.blogapi.controller;
import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.healthylifestyle.blogapi.model.User; 
import com.healthylifestyle.blogapi.repository.UserRepository;

@RestController
//All endpoints
@RequestMapping("/api/auth")
public class UserController {
    //repository to interavt with the users tabele in db
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
//handles post request
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody Map<String, String> loginData) {
        //finds username from db
        User user = userRepository.findByUsername(loginData.get("username"));
        if (user != null && user.getPassword().equals(loginData.get("password"))) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }
//handles postrequest
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        //checks if username already exists indb
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }//if not saves in db
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }
    //this is handling delete request
  @DeleteMapping("/delete/{username}")
public ResponseEntity<String> deleteUser(@PathVariable String username) {
    User user = userRepository.findByUsername(username);
    if (user == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Username not found");
    }
    userRepository.delete(user);
    return ResponseEntity.ok("User deleted successfully");
}

    @PutMapping("/update/{username}")
public ResponseEntity<String> updateUser(@PathVariable String username, @RequestBody User updatedUser) {
    User user = userRepository.findByUsername(username);
    if (user == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }
    user.setEmail(updatedUser.getEmail());
    user.setPassword(updatedUser.getPassword());
    userRepository.save(user);
    return ResponseEntity.ok("User updated successfully");
    }
}