import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logoutUser();
    this.router.navigate(['login']);
  }
}
