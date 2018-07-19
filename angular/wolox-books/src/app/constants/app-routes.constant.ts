import { Routes } from '@angular/router';

import { UnauthComponent } from '../screens/unauth/unauth.component';
import { AuthComponent } from '../screens/auth/auth.component';
import { RegisterComponent } from '../screens/unauth/screens/register/register.component';
import { LoginComponent } from '../screens/unauth/screens/login/login.component';
import { BooksComponent } from '../screens/auth/screens/books/books.component';

import { AuthGuard } from '../guards/auth.guard';
import { UnauthGuard } from '../guards/unauth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [UnauthGuard],
    component: UnauthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'sign-up',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'book-list',
    canActivate: [AuthGuard],
    component: AuthComponent,
    children: [
      {
        path: '',
        component: BooksComponent,
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
