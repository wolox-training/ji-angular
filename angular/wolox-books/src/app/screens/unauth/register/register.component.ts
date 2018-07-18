import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../components/services/user/user.service';

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
          this.router.navigate(['unauth/login']);
        },
        () => console.log('Error!')
      );
    } else {
      this.validateAllFormFields(this.registerForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
