import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { BookService } from './../../../services/book/book.service';
import { Book } from './../../../models/book.model';

import 'rxjs/add/operator/catch';

@Injectable()
export class GetBookListResolver implements Resolve<Observable<string | Book[]>> {
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string | Book[]> {
    return this.bookService.getBookList().catch(() => {
      return Observable.of('data not available at this time');
    });
  }
}
