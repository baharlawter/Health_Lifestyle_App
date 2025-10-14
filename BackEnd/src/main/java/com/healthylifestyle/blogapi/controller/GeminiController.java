// package com.healthylifestyle.blogapi.controller;

// import com.healthylifestyle.blogapi.service.GeminiService;
// import org.springframework.web.bind.annotation.*;
// import java.util.Map;

// @RestController
// @RequestMapping("/api/gemini")
// @CrossOrigin(origins = "*")
// public class GeminiController {
    
//     private final GeminiService geminiService;

//     public GeminiController(GeminiService geminiService) {
//         this.geminiService = geminiService;
//     }
    
//     @PostMapping("/generate")
//     public String generateContent(@RequestBody Map<String, String> request) {
//         System.out.println("POST request received: " + request);
//         String prompt = request.get("prompt");
//         if (prompt == null || prompt.trim().isEmpty()) {
//             return "Error: No prompt provided";
//         }
//         try {
//             return geminiService.generateContent(prompt);
//         } catch (Exception e) {
//             return "Error: " + e.getMessage();
//         }
//     }
    
//     @GetMapping("/test")
//     public String test() {
//         return "Gemini API is working!";
//     }
// }