import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/login.model';
import LoginService from '../../services/login.service';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent {
  myReactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, PasswordValidator]),
  });

  submitForm() {
    this.myReactForm.markAllAsTouched();

    if (this.myReactForm.invalid) {
      return;
    }
    const loginData: Login = this.myReactForm.value;

    this.loginService.login(loginData);
  }

  constructor(private loginService: LoginService) {}
}
