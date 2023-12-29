package com.edubridge.app1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.model.Book;
import com.edubridge.app1.service.BookService;

@RestController

//@CrossOrigin("*")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
	@Autowired
	private BookService service;

	@PostMapping("/book")
	public ResponseEntity<Book> save(@RequestBody Book book){
		Book savedBook = service.saveBook(book);
		return new ResponseEntity<>(savedBook, HttpStatus.CREATED);

	}

	@GetMapping("/book")
	public ResponseEntity<?> getAllBooks(){
		List<Book> bookList =	service.getBook();
		return new ResponseEntity<>(bookList,HttpStatus.OK);
	}
	
	@GetMapping("/book/{id}")
	public ResponseEntity<?> getSingleBook(@PathVariable Integer id){
		Book book = service.getBook(id);
		return new ResponseEntity<>(book, HttpStatus.OK);
	}
	@PutMapping(path="/book")
	public ResponseEntity<Book> update(@RequestBody Book book){
		 service.updateBook(book);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	 
	@DeleteMapping("/book/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id){
		service.deleteBook(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
