import { Component, ViewChild } from '@angular/core';
// import { Book } from '../../common/book';

// import { SlickCarouselComponent } from 'ngx-slick-carousel/slick.component';
import { BookServiceService } from '../../service/book-service.service';

interface Book {
  imageUrl: string;
  bookName: string;
  bookAuthor:string;
  bookRate: number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  host: { 'ngSkipHydration': '' }
})
export class BookListComponent {

  @ViewChild('trending')
  // trending!: SlickCarouselComponent;

  trendingImages: Book[] = [
    //'assets/book_image_1.jpg',
    {
      imageUrl: 'assets/book_image_1.jpg',
      bookName: 'Book 1',
      bookAuthor:'Varun',
      bookRate: 4.5
    }
    
   
    // Add more image paths for best arrivals
  ];

  // slickNext() {
  //   this.trending.slickNext();
  // }

  // slickPrev() {
  //   this.trending.slickPrev();
  // }


  // books: Book[] = [];

  constructor(private bookService:BookServiceService) { }

  // ngOnInit(){
  //   this.loadBooks();
  // }

  // loadBooks(){
  //   this.bookService.getAllBooks().subscribe(
  //     (data: Book[]) => {
  //       this.books = data;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching books:', error);
  //     }
  //   );
  // }

}
