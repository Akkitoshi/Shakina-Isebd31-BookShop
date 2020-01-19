import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable()

export class BooksService { 
    constructor (private http: HttpClient){} 
    getBooks(){ 
        return this.http.get('https://localhost:44393/api/book'); 
    }
    addBook( AuthorName:string, BookName:string, PublishingYear: number){
        const data ={
            AuthorName: AuthorName,
            BookName : BookName,
            PublishingYear: PublishingYear
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