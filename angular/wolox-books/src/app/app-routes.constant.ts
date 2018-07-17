import { Routes } from '@angular/router';
import { RegisterComponent } from './screens/register/register.component';
import { LoginComponent } from './screens/login/login.component';

export const routes: Routes = [
  {
    path: 'sign-up',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
