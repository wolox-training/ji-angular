import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../components/services/user/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent {
  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logoutUser();
    this.router.navigate(['login']);
  }
}
