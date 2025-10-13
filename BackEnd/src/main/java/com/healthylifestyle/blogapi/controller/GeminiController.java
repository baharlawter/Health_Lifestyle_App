package com.healthylifestyle.blogapi.controller;

import com.healthylifestyle.blogapi.service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/gemini")
@CrossOrigin(origins = "*")
public class GeminiController {
    
    @Autowired
    private GeminiService geminiService;
    
    @PostMapping("/generate")
    public String generateContent(@RequestBody String prompt) {
        return geminiService.generateContent(prompt);
    }
}