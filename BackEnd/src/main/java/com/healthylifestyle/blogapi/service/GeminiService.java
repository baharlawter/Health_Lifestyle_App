package com.healthylifestyle.blogapi.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;

@Service
public class GeminiService {
    
    @Value("${GEMINI_API_KEY:}")
    private String apiKey;
    
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;
    
    public GeminiService() {
        this.restTemplate = new RestTemplate();
        this.objectMapper = new ObjectMapper();
    }
    
    public String generateContent(String prompt) {
        if (apiKey.isEmpty()) {
            return "Error: GEMINI_API_KEY not configured";
        }
        
        try {
            String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey;
            
            // Create request body without text blocks
            String requestBody = "{\"contents\":[{\"parts\":[{\"text\":\"" + prompt.replace("\"", "\\\"") + "\"}]}]}";
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            
            HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
            
            // Parse response
            JsonNode jsonNode = objectMapper.readTree(response.getBody());
            return jsonNode.path("candidates").get(0)
                          .path("content").path("parts").get(0)
                          .path("text").asText();
                          
        } catch (Exception e) {
            return "Error generating content: " + e.getMessage();
        }
    }
}