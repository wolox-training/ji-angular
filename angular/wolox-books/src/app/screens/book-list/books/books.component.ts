import { Component, OnInit } from '@angular/core';

import { BookService } from './../../../components/services/book/book.service';
import { Book } from './../../../components/models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBookList().subscribe((response) => {
      this.books = response;
    });
  }
}
