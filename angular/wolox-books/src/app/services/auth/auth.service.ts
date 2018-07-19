import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class AuthService {
  constructor(private localStorageService: LocalStorageService) {}

  loggedIn() {
    return !!this.localStorageService.getValue('user');
  }
}
