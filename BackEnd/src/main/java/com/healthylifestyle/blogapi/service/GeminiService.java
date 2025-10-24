package com.healthylifestyle.blogapi.service;


import org.springframework.stereotype.Service;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;


@Service
public class GeminiService {
    

      Client client =new Client();
                
    public String generateContent(String prompt) {
        if (prompt == null || prompt.trim().isEmpty()) {


            return "Please provide a prompt";

        }
      GenerateContentResponse response=client.models.generateContent("gemini-2.0-flash-001", prompt, null);
      return response.text();

    }
}