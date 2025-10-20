// package com.healthylifestyle.blogapi.service;

// import com.google.genai.Client;
// import com.google.genai.types.GenerateContentResponse;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Service;

// @Service
// public class GeminiService {
    
   
    
//     public GeminiService(@Value("${GOOGLE_API_KEY:}") String apiKey) {
//         this.apiKey = apiKey;
//         System.out.println("API Key loaded: " + (apiKey != null && !apiKey.isEmpty() ? "Yes" : "No"));
        
//         if (apiKey == null || apiKey.trim().isEmpty()) {
//             throw new IllegalArgumentException("GOOGLE_API_KEY environment variable is required");
//         }
//     }
    
//     public String generateContent(String prompt) {
//         if (prompt == null || prompt.trim().isEmpty()) {
//             return "Error: No prompt provided";
//         }
        
//         try {
//             Client client = new Client();
            
//             GenerateContentResponse response = client.models.generateContent(
//                 "gemini-1.5-flash",
//                 prompt,
//                 null
//             );
            
//             return response.text();
            
//         } catch (Exception e) {
//             System.out.println("Error: " + e.getMessage());
//             e.printStackTrace();
//             return "Error generating content: " + e.getMessage();
//         }
//     }
// }