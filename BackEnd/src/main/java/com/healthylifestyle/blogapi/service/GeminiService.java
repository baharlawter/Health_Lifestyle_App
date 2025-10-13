package com.healthylifestyle.blogapi.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

@Service
public class GeminiService {
    
    @Value("${GEMINI_API_KEY:}")
    private String apiKey;
    
    public String generateContent(String prompt) {
        // Add debug logging
        System.out.println("API Key loaded: '" + apiKey + "'");
        System.out.println("API Key length: " + apiKey.length());
        System.out.println("API Key is empty: " + apiKey.isEmpty());
        
        if (apiKey.isEmpty()) {
            return "Error: GEMINI_API_KEY not configured";
        }
        return "AI Response: " + prompt + " (API Key loaded successfully)";
    }
}