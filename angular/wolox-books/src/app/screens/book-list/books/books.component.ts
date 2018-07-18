import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../components/services/user/user.service';
import { BookService } from './../../../components/services/book/book.service';
import { Book } from './../../../components/models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private userService: UserService, private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.bookService.getBookList().subscribe((response) => {
      this.books = response;
    });
  }

  logout() {
    this.userService.logoutUser();
    this.router.navigate(['login']);
  }
}
