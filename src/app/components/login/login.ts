import { Component, signal } from '@angular/core';
import { form, required, minLength, email, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}
@Component({
  selector: 'app-login',
  imports: [RouterLink, FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email address is required' });
    email(schemaPath.email, { message: 'Please enter a valid email address' });

    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, {
      message: 'Password must be at least 8 characters',
    });
  });

  onSubmit(event: Event) {
    event.preventDefault();

    console.log('Form submitted successfully:', this.loginModel());
  }
}
