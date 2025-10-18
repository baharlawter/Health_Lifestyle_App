package com.healthylifestyle.blogapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.healthylifestyle.blogapi.model.Book;
import com.healthylifestyle.blogapi.repository.BookRepository;

@Service
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
}