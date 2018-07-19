import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logoutUser();
    this.router.navigate(['login']);
  }
}
