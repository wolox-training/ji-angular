import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { BookService } from '../../../../../services/book/book.service';
import { Book } from '../../../../../models/book.model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class GetBookDetailResolver implements Resolve<Observable<string | Book>> {
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string | Book> {
    return this.bookService.getBookDetail(route.params.id).catch(() => {
      this.router.navigate(['book-list']);
      return Observable.of('data not available at this time');
    });
  }
}
