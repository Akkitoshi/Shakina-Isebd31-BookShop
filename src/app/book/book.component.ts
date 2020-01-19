import { Component, OnInit } from '@angular/core';
import { BooksService } from './book.service';
import { Book } from '../shared/book.model';
import { ToastrService } from 'ngx-toastr';

interface ArrayOfBook {
  BookId: number;
  BookName: string;
  AuthorName: string;
  Price: number;
}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})

export class BookComponent implements OnInit{
  BookName: string = ' ';
  AuthorName: string = ' ';
  Price: number = 0;

  arrayOfBook: ArrayOfBook[] = [];
  constructor(private booksService: BooksService, private toastr: ToastrService) {
    // this.LoadBooks();
    this.ws.onopen = () => {
      this.setStatus('ONLINE');
      this.LoadBooks();
      this.ws.onmessage = (response) => {
        this.toastr.success(response.data);
        this.printMessage(response.data);  
      };
    };
    this.booksService.ngOnInit();

  }
  
  private sub = document.getElementById('submit');
  private ws = new WebSocket('ws://localhost:3000');
  books:Book[];
  text: string;
  setStatus(value) {
    console.log(value)
  }
  printMessage(value) {
    this.toastr.success('Hello!'); 
    console.log(value);
  }
  SendMessage() {   
    console.log("Take this message from me!");
    this.ws.send('isUpgrade');   
    
  }
  LoadBooks() {
    this.booksService.getBooks().subscribe((arrayOfBook: ArrayOfBook[]) => {
      this.arrayOfBook = arrayOfBook;
      console.log(this.arrayOfBook);
    });
  }
  ngOnInit() {
    var te = new TextEncoder();
  }

  addBook() {
    this.booksService.addBook(this.AuthorName, this.BookName, this.Price)
      .subscribe((arrayOfBook: ArrayOfBook[]) => {
        this.LoadBooks();
      }),
    this.BookName = '';
    this.AuthorName = '';
    this.Price = 0;
    this.LoadBooks();
    this.SendMessage();
  }
  setNewYear(books: ArrayOfBook) {
    console.log("compon change")
    this.BookName = books.BookName;
    this.AuthorName = books.AuthorName;
    this.Price = books.Price;    
  }

  setNewBook(books : ArrayOfBook){
    console.log("compon setNewBook")
    books.AuthorName = this.AuthorName;
    books.BookName = this.BookName;
    books.Price = this.Price;
    this.booksService.changeBook(books).subscribe(data=>console.log(data))

  }

  delBook(BookId: number) {
    console.log("compon delete");
    this.booksService.delBook(BookId).subscribe(data=>this.LoadBooks());  
  }

  getResult(text: string) {
    if(text == "") this.booksService.getBooks().subscribe((arrayOfBook: ArrayOfBook[]) => {
      this.arrayOfBook = arrayOfBook;
      console.log(this.arrayOfBook);
    });
    else this.booksService.getResult(text).subscribe((arrayOfBook: ArrayOfBook[]) => {
      this.arrayOfBook = arrayOfBook;
      console.log(this.arrayOfBook);
    });
    
  }
  
}
