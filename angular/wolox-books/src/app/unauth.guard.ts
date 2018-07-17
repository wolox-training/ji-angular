import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './components/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      this.router.navigate(['book-list/books']);
      return false;
    } else {
      return true;
    }
  }
}
