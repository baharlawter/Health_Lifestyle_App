package com.healthylifestyle.blogapi.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthylifestyle.blogapi.model.Book;
import com.healthylifestyle.blogapi.service.BookService;

@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;
    //Spring will provide a BookSercve instance here
    public BookController(BookService bookService){
        this.bookService=bookService;

    }
    //this one handles get resuest 
    @GetMapping
    public List <Book> getAllBooks(){
        return bookService.getAllBooks();
    }
    
}
