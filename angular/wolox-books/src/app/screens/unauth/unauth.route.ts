import { UnauthComponent } from './unauth.component';
import { UnauthGuard } from './../../guards/unauth.guard';

import { RegisterRoute } from './screens/register/register.route';
import { LoginRoute } from './screens/login/login.route';

export const UnauthRoute = {
  path: '',
  canActivate: [UnauthGuard],
  component: UnauthComponent,
  children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    RegisterRoute,
    LoginRoute
  ]
};
