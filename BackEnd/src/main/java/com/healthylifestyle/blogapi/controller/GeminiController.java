// package com.healthylifestyle.blogapi.controller;

// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;

// import java.util.Map;

// @RestController
// @RequestMapping("/api/gemini")

// public class GeminiController {
    
//     private final com.healthylifestyle.blogapi.service.GeminiService geminiService;
    
//     public GeminiController(com.healthylifestyle.blogapi.service.GeminiService geminiService) {
//         this.geminiService = geminiService;
//     }
    
    
//     @PostMapping("/generate")
//     public String generateContent(@RequestBody Map<String, String> request) {
//         String prompt = request.get("prompt");
        
//         if (prompt == null || prompt.trim().isEmpty()) {
//             return "Error: No prompt provided";
//         }
        
//         return geminiService.generateContent(prompt);
//     }
    
// }