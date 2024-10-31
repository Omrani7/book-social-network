import { Component, inject } from '@angular/core';
import { AuthenticationRequest } from '../../../../.src/app/services/models/authentication-request';
import { AuthenticationService } from '../../../../.src/app/services/services/authentication.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../../../.src/app/services/services/token/token.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(private router:Router,
    private authService:AuthenticationService ,
    private tokenService: TokenService ){

  }

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['books']);
      },
      error: (err) => {
        console.log(err);

        if (err.status === 400 && err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        }
        else if (err.status === 401 && err.error.error) {
          this.errorMsg.push(err.error.error);
        }
        else {
          this.errorMsg.push("An unexpected error occurred.");
        }
      }
    });
}

  register() {
    this.router.navigate(['register']);
  }
}
