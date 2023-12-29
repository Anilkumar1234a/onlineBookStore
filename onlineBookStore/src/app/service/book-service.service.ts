import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Projecturl } from '../ProjectUrl';
import { Book } from '../Modal/Book';
import { ProjectUrl } from '../ProjectUrl';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
   //private baseUrl = "http://localhost:8081/book";
  

  url:string=ProjectUrl.getUrl();




 constructor(private http:HttpClient){}
 

  public saveBook(book:Book):Observable<any>

 {

   return this.http.post(this.url + "/book" ,book,{responseType:'text'});

 }
  
 public extractBooks():Observable<any>

    {

  return this.http.get<any>(this.url+"/book");

    }

 public deleteBook(id: number): Observable<any>{
  return this.http.delete<any>(this.url+`/book/${id}`);
}

public updateBook(book:Book,bookId:number):Observable<any>
    {
      return this.http.put<any>(this.url+`/book/${bookId}`,book);
    }
    public getBook(id:number):Observable<any>
    {
      return this.http.get<Book>(this.url+`/book/${id}`);
    }


}
  