import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-register', templateUrl: './register.component.html' })
export class RegisterComponent {
  email = ''; password = '';
  constructor(private auth: AuthService, private router: Router) {}
  register() {
    this.auth.register({ email: this.email, password: this.password }).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
