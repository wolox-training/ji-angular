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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerForm: FormGroup;
  fieldRequired = 'This field is required';
  validEmail = 'Enter a valid email';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
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

  register(data) {
    if (this.registerForm.valid) {
      const user = {
        user: {
          email: data.email,
          password: data.password,
          password_confirmation: data.password,
          first_name: data.firstName,
          last_name: data.lastName,
          locale: 'en'
        }
      };
      this.userService.createUser(user).subscribe(
        () => {
          this.router.navigate(['login']);
        },
        () => console.log('Error!')
      );
    } else {
      this.validateAllFormFields(this.registerForm);
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
