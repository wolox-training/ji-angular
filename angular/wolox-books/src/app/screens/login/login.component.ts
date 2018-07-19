import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: FormGroup;
  fieldRequired = 'This field is required';
  validEmail = 'Enter a valid email';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: [
        null,
        Validators.compose([Validators.email, Validators.required])
      ],
      password: [
        null,
        Validators.compose([Validators.minLength(6), Validators.required])
      ]
    });
  }

  login(data) {
    if (this.loginForm.valid) {
      const user = {
        session: {
          email: data.email,
          password: data.password
        }
      };
      this.userService.loginUser(user).subscribe(
        (response) => {
          console.log(response);
        },
        () => console.log('Error!')
      );
    } else {
      this.validateAllFormFields(this.loginForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    for (const i in formGroup.controls) {
      if (formGroup.controls[i] instanceof FormControl) {
        formGroup.controls[i].markAsTouched();
      }
    }
  }
}
