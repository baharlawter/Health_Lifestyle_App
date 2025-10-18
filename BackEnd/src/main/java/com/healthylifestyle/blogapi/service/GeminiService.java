package com.healthylifestyle.blogapi.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {
    
    private final Client client;
    
    public GeminiService() {
        // Client automatically reads GEMINI_API_KEY environment variable
        this.client = new Client();
    }
    
    public String generateContent(String prompt) {
        System.out.println("=== DEBUG INFO ===");
        System.out.println("Prompt received: " + prompt);
        
        try {
            GenerateContentResponse response = client.models.generateContent(
                "gemini-1.5-flash",
                prompt,
                null
            );
            
            String result = response.text();
            System.out.println("AI Response: " + result);
            return result;
            
        } catch (Exception e) {
            System.out.println("=== ERROR DEBUG ===");
            System.out.println("Error message: " + e.getMessage());
            e.printStackTrace();
            return "Error generating content: " + e.getMessage();
        }
    }
}