// package com.healthylifestyle.blogapi.service;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Service;
// import org.springframework.web.reactive.function.client.WebClient;
// import org.springframework.http.MediaType;

// import java.util.Map;
// import java.util.List;

// @Service
// public class GeminiService {
    
//     private final String apiKey;
//     private final WebClient webClient;
    
//     public GeminiService(@Value("${GOOGLE_API_KEY}") String apiKey) {
//         this.apiKey = apiKey;
//         this.webClient = WebClient.builder()
                
//     }
    
//     public String generateContent(String prompt) {
//         if (prompt == null || prompt.trim().isEmpty()) {
//             return "Please provide a prompt";
//         }
      
// }