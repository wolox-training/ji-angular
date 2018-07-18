import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WoloxBooksApi } from '../../constants/app.constant';
import { User } from '../../models/user.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  createUser(user): Observable<User> {
    return this.http
      .post<User>(`${WoloxBooksApi.baseUrl}/users`, user);
  }

  loginUser(user): Observable<any> {
    return this.http
      .post<User>(`${WoloxBooksApi.baseUrl}/users/sessions`, user)
      .map(response => {
        this.localStorageService.setValue('user', response);
      });
  }

  logoutUser() {
    this.localStorageService.removeValue('user');
  }
}
