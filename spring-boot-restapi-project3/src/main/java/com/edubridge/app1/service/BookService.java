package com.edubridge.app1.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.edubridge.app1.model.Book;
import com.edubridge.app1.repo.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository repo;

	
	public Book saveBook(Book book) {
		return repo.save(book);
	}
	
	public List<Book> getBook(){
		return repo.findAll();
		
	}
	
	public Book getBook(Integer id) {
		return repo.findById(id).get();
	}
	
	public void updateBook(Book book) {
		repo.save(book);
		
	}
	
	
	public void deleteBook (Integer id) {
		repo.deleteById(id);
		
	}

}
