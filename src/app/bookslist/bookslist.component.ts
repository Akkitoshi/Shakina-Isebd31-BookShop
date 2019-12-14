import {Component} from '@angular/core'
import { BooksService } from './books.service';

interface ArrayOfBooks{
  BookID: number;
  BookAuthor: string;
  BookName: string;
  BookPublisherYear: number;
  Price: number;
}
@Component({
  selector: 'app-bookslist',
  templateUrl:'./bookslist.component.html',
  styleUrls: ['./bookslist.component.less']
}) 
export class BookslistComponent{
  BookName:string =' ';
  BookAuthor:string =' ';
  BookPublisherYear:number =0;
  Price:number =0;

  arrayOfBooks : ArrayOfBooks[] = [];

  constructor (private booksService: BooksService){
    this.LoadBooks();
  }
LoadBooks(){
  this.booksService.getBooks().subscribe((arrayOfBooks :ArrayOfBooks[])=>{
    this.arrayOfBooks = arrayOfBooks;
    console.log(this.arrayOfBooks);
  });
  }
  addBook(){
this.booksService.addBook(this.BookAuthor,this.BookName,this.BookPublisherYear,this.Price)
.subscribe((arrayOfBooks :ArrayOfBooks[])=>{
  this.LoadBooks();
}),
this.BookName ='';
this.BookAuthor ='';
this.BookPublisherYear =0;
this.Price =0;
  }
  setNewYear(books: ArrayOfBooks) {
    console.log("compon change")
    this.BookName = books.BookName;
    this.BookAuthor = books.BookAuthor;
    this.BookPublisherYear = books.BookPublisherYear;  
    this.Price=books.Price  }
  setNewBook(books : ArrayOfBooks){
      console.log("compon setNewBook")
      books.BookAuthor = this.BookAuthor;
      books.BookName = this.BookName;
      books.BookPublisherYear = this.BookPublisherYear;
      books.Price=this.Price;
      this.booksService.changeBook(books).subscribe(data=>console.log(data))
    }
    delBook(BookId: number) {
      console.log("compon delete");
    this.booksService.delBook(BookId).subscribe(data=>this.LoadBooks());  
  }
}
