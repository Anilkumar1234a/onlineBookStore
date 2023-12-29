package com.edubridge.app1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name="book")
public class Book {
	@Id
	@GeneratedValue
	private Integer bookId;
	private String bookName;
	private String bookAuthor;
	private Long bookPrice;
	
	
	
	public Book() {
		super();
		
	}



	public Book(Integer  bookId, String bookName, String  bookAuthor, Long  bookPrice) {
		super();
		this.bookId = bookId;
		this.bookName =  bookName;
		this.bookAuthor =  bookAuthor;
		this.bookPrice =  bookPrice;
		
		
	}



	public Integer getBookId() {
		return bookId;
	}



	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}



	public String getBookName() {
		return bookName;
	}



	public void setBookName(String bookName) {
		this.bookName = bookName;
	}



	public String getBookAuthor() {
		return bookAuthor;
	}



	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}



	public Long getBookPrice() {
		return bookPrice;
	}



	public void setBookPrice(Long bookPrice) {
		this.bookPrice = bookPrice;
	}



	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", bookName=" + bookName + ", bookAuthor=" + bookAuthor + ", bookPrice="
				+ bookPrice + "]";
	}

}