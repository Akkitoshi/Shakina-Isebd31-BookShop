import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable()

export class BooksService implements OnInit { 
    constructor (private http: HttpClient, private toastr: ToastrService){} 
    ngOnInit() {
        this.toastr.success("до запроса")
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        const data: any = {
        'url': 'ws://localhost:3000'
        };
        this.http.post("http://localhost:3200/subscribe", <JSON>data, httpOptions).subscribe(data => {
        console.log(data);
        });
        console.log("после запроса2");
        }
    
    getBooks(){ 
        return this.http.get('https://localhost:44393/api/book'); 
    }
    addBook( AuthorName:string, BookName:string, Price: number){
        const data ={
            AuthorName: AuthorName,
            BookName : BookName,
            Price: Price
        }
        return this.http.post('https://localhost:44393/api/book', (data));
    }
    changeBook(books : any){     
        console.log('service change', books.BookId);
        let url=`https://localhost:44393/api/book/${books.BookId}`;
        let prom = this.http.put(url, books)
        console.log(prom);
        return prom;
    }
    delBook(BookId : number){
        console.log('service delete', BookId);
        let url=`https://localhost:44393/api/book/${BookId}`;
        let prom =  this.http.delete(url);
        console.log(prom);
        return prom;
    }

    getResult(text: string): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        const data: any = {
        "text": text
        };
        return this.http.post(`https://localhost:44393/api/Search/?text=` + text, <JSON>data, httpOptions)
      }

}