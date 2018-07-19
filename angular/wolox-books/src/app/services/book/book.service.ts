import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WoloxBooksApi } from '../../constants/app.constant';
import { Book } from '../../models/book.model';

import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(`${WoloxBooksApi.baseUrl}/books`);
  }

  getBookDetail(id): Observable<any> {
    return this.http.get(`${WoloxBooksApi.baseUrl}/books/${id}`);
  }
}
