import { Routes } from '@angular/router';

import { AuthRoute } from './../screens/auth/auth.route';
import { UnauthRoute } from './../screens/unauth/unauth.route';

export const routes: Routes = [
  UnauthRoute,
  AuthRoute,
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
