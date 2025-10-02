package com.healthylifestyle.BackEnd.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.healthylifestyle.BackEnd.model.User;
import com.healthylifestyle.BackEnd.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository){
        
        this.userRepository=userRepository;
    }
    public List <User> getAllUsers(){
        return userRepository.findAll();
    }
    public Optional <User> getUserById(Long id){
        return userRepository.findById(id);
    }
   public User findByUsername(String username){
    return userRepository.findByUsername(username);

   }
   public boolean usernameExists(String username){
    return userRepository.findByUsername(username)!=null;
   }
   public User saveUser(User user){
    return userRepository.save(user);
   }
}
