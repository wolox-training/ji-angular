import { Routes } from '@angular/router';

import { UnauthComponent } from './screens/unauth/unauth.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { RegisterComponent } from './screens/unauth/register/register.component';
import { LoginComponent } from './screens/unauth/login/login.component';
import { BooksComponent } from './screens/book-list/books/books.component';

import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

export const routes: Routes = [
  {
    path: 'unauth',
    canActivate: [UnauthGuard],
    children: [
      {
        path: '',
        component: UnauthComponent
      },
      {
        path: 'sign-up',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: 'book-list',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: 'books',
        component: BooksComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'unauth/login'
  }
];
