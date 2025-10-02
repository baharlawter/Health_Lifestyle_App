package com.healthylifestyle.BackEnd.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.healthylifestyle.BackEnd.model.Book;
import com.healthylifestyle.BackEnd.repository.BookRepository;

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