import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService  implements OnInit{

  constructor(private httpClient : HttpClient) { }

  getBooks(){
    return this.httpClient.get("http://localhost:8080/api/book/findAllBooks");
  }

  ngOnInit(): void {    
  }
}
