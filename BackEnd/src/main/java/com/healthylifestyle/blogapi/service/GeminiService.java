package com.healthylifestyle.blogapi.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {
    
    private final Client client;
    
    public GeminiService() {
        this.client = new Client();
    }
    
    public String generateContent(String prompt) {
        if (prompt == null || prompt.trim().isEmpty()) {
            return "Error: No prompt provided";
        }
        
        try {
            GenerateContentResponse response = client.models.generateContent(
                "gemini-1.5-flash",
                prompt,
                null
            );
            
            return response.text();
            
        } catch (Exception e) {
            return "Error generating content: " + e.getMessage();
        }
    }
}