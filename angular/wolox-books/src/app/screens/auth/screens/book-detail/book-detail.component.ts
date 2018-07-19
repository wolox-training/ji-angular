import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookService } from './../../../../services/book/book.service';
import { Book } from './../../../../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  detail: Book;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookService.getBookDetail(params.id).subscribe(
        detail => {
          this.detail = detail;
        },
        error => {
          console.log(error.message);
          this.router.navigate(['book-list']);
        }
      );
    });
  }
}
