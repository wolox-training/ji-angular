import { Routes } from '@angular/router';

import { AuthComponent } from '../screens/auth/auth.component';
import { RegisterComponent } from '../screens/register/register.component';
import { LoginComponent } from '../screens/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'book-list',
    component: AuthComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
