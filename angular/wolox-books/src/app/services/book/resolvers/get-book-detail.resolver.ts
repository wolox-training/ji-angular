import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { BookService } from './../../../services/book/book.service';
import { Book } from './../../../models/book.model';

@Injectable()
export class GetBookDetailResolver implements Resolve<Book> {
  constructor(private bookService: BookService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    return this.bookService.getBookDetail(route.params.id);
  }
}
