package com.healthylifestyle.blogapi.controller;
import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.healthylifestyle.blogapi.model.User; 

import com.healthylifestyle.blogapi.service.UserService;

@RestController
//All endpoints
@RequestMapping("/api/auth")
public class UserController {
    
    
    private final UserService userService;
    public UserController (UserService userService){
        this.userService=userService;
    }

    
@PostMapping("/login")
public ResponseEntity<User>login(@RequestBody Map <String,String>lognData){
    User user =userService.findByUsername(lognData.get("username"));
    if (user !=null && user.getPassword().equals(lognData.get("password"))){
        return ResponseEntity.ok(user);
    }
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
}
@PostMapping("/register")
public ResponseEntity <String> register(@RequestBody User user){
    if(userService.usernameExists(user.getUsername())){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username alerady exists");
    }
    userService.saveUser(user);
    return ResponseEntity.ok("User registered successfully");
}
}
