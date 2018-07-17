import { AuthComponent } from './components/common/auth/auth.component';
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
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
