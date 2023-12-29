import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../Modal/Book';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css',
  host: { 'ngSkipHydration': '' }
})
export class ViewBookComponent {
  // book: Book = { bookName: '', bookAuthor: '', bookPrice: 0 }; // Initialize with default values or fetch from API
  bookId: number;
  book: Book = new Book();
  books: Book[] = [];
  bName: string;
  bAuthor: string;
  bPrice: number;
  showDialog1: boolean;
  Issubmitted: boolean;

  constructor(private forservice: BookServiceService, private router: Router) { }
  ngOnInit(): void {
    this.getBookList();
  }

  public DeleteBook(bookId: number) {
    this.forservice.deleteBook(bookId).subscribe(response => {
      console.log(response);
      alert("Book is Deleted");
      window.location.reload();
    });
  }
  EditBook(bookId: number) {
   
    this.showDialog1 = true;

    this.forservice.getBook(bookId).subscribe(response => {
      console.log("Edit")
      this.book = response;
   
      this.bName = this.book.bookName;
      this.bAuthor = this.book.bookAuthor;
      this.bPrice = this.book.bookPrice;
   
    })
  }
  public getBookList(): void {

    this.Issubmitted = true;

    console.log(this.book);

    this.forservice.extractBooks().subscribe(

      response => {

        this.books = response;

      }

    )

  }
 

}
