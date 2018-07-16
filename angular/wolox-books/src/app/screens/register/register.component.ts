import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  fieldRequired = 'This field is required';
  validEmail = 'Enter a valid email';

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.email, Validators.required])],
      'password': [null, Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  register(data) {
    if (this.registerForm.valid) {
      const registration = `
    {
      "user": {
        "email": ${data.email},
        "password": ${data.password},
        "password_confirmation": ${data.password},
        "first_name": ${data.firstName},
        "last_name": ${data.lastName},
        "locale": "en"
      }
    }`;
    console.log(registration);
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
