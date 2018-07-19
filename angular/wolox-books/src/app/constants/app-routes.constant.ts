import { Routes } from '@angular/router';

import { UnauthComponent } from '../screens/unauth/unauth.component';
import { AuthComponent } from '../screens/auth/auth.component';
import { RegisterComponent } from '../screens/unauth/screens/register/register.component';
import { LoginComponent } from '../screens/unauth/screens/login/login.component';
import { BooksComponent } from '../screens/auth/screens/books/books.component';
import { BookDetailComponent } from './../screens/auth/screens/book-detail/book-detail.component';

import { AuthGuard } from '../guards/auth.guard';
import { UnauthGuard } from '../guards/unauth.guard';

import { GetBookListResolver } from './../services/book/resolvers/get-book-list.resolver';
import { GetBookDetailResolver } from '../services/book/resolvers/get-book-detail.resolver';

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
        resolve: {
          books: GetBookListResolver
        }
      },
      {
        path: ':id',
        component: BookDetailComponent,
        resolve: {
          detail: GetBookDetailResolver
        }
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
