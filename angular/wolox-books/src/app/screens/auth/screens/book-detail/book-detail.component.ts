import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from './../../../../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})

export class BookDetailComponent implements OnInit {
  detail: Book;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.detail = this.route.snapshot.data.detail;
  }
}
