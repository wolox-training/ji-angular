import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { BookService } from './../../../services/book/book.service';
import { Book } from './../../../models/book.model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class GetBookListResolver implements Resolve<any> {
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.bookService.getBookList().catch(() => {
      return Observable.of('data not available at this time');
    });
  }
}
