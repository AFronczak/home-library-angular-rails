// src/app/book-list/book-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/api/books.json')
      .subscribe(response => console.log(response));
  }

}
