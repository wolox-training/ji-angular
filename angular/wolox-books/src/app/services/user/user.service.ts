import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WoloxBooksApi } from '../../constants/app.constant';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  createUser(user): Observable<User> {
    const headers = new HttpHeaders();
    return this.http.post<User>(`${WoloxBooksApi.baseUrl}/users`, user, {headers});
  }

  loginUser(user): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post<User>(`${WoloxBooksApi.baseUrl}/users/sessions`, user, {headers})
    .map((response) => {
      this.localStorageService.setValue('user', response);
    });
  }
}
