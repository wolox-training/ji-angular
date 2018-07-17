import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WoloxBooksApi } from '../../constants/app.constant';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user): Observable<User> {
    const headers = new HttpHeaders();
    return this.http.post<User>( `${WoloxBooksApi.baseUrl}/users`, user, {
      headers
    });
  }
}
