import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../Modal/Book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: { 'ngSkipHydration': '' }
})
export class HeaderComponent {
  [x: string]: any;
  book:Book=new Book();
  books:Book[]=[];
  str:string | undefined
  Issubmitted: boolean | undefined;
  bName:string;
  bAuthor:string;
  bPrice:number;
  msg:string;
  valid: boolean = false;
  showDialog1:boolean;
  errorMsg:string;
  bookForm: FormGroup;




  
  constructor( private forservice:BookServiceService,private router:Router, private fb: FormBuilder) {}
    

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      bookName: ['', Validators.required],
      bookAuthor: ['', Validators.required],
      bookPrice: ['', Validators.required],
    });
  }

public addBook(): void {

  if (!this.book.bookName || !this.book.bookAuthor || !this.book.bookPrice) {
    this.valid = true; 
    return;
  }
  console.log(this.book);

  this.forservice.saveBook(this.book).subscribe(
    (p) => {
      console.log(p);
      this.errorMsg = p.errorMsg;
      console.log(this.errorMsg);
      alert("Book added");
    },
    (error) => {
      console.error(error);
  
    }
  );
}


    public getBookList():void{

      this.Issubmitted=true;
  
      console.log(this.book);
  
      this.forservice.extractBooks().subscribe(
  
        response=>
  
        {
  
    this.books=response;
  
        }
  
      )
  
    }
    

    public cancel(){
      this.router.navigate(['/']);
    }


    public DeleteBook(bookId:number)
  {
    this.forservice.deleteBook(bookId).subscribe(response=>{
  console.log(response);
 alert("Book is Deleted");
 window.location.reload();
    });
  }
  public updateBook(bookId: number): void {

      this.book.bookName=this.bName;
      this.book.bookAuthor=this.bAuthor;
      this.book.bookPrice=this.bPrice;


    this.forservice.updateBook(this.book, bookId).subscribe(response => {

      console.log(response);
    });
    alert("Book Details have been updated")
    this.showDialog1 = false;
    window.location.reload();
  }
  EditBook(bookId: number) {
    // debugger
    this.showDialog1 = true;
    // this.customerId=this.route.snapshot.params["CId"];

    this.forservice.getBook(bookId).subscribe(response => {
      this.book = response;
      this.book.bookName=this.bName;
      this.book.bookAuthor=this.bAuthor;
      this.book.bookPrice=this.bPrice;

    })
  }
  closePopup() {
    this.showDialog1 = false;

  }
}
