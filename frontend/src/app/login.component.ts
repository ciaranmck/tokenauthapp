import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
  <mat-card>
    <mat-card-header>
      <mat-card-title>
        <h4>Login</h4>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
    <form>
    <mat-form-field>
      <input [(ngModel)]="loginData.email" name="email" matInput placeholder="email" type="email">
    </mat-form-field>
    <mat-form-field>
    <input [(ngModel)]="loginData.pwd" name="password" matInput placeholder="password" type="password">
    </mat-form-field>
    <button (click)="post()" mat-raised-button color="primary">Login</button>
    </form>
    </mat-card-content>
  </mat-card>
`
})
export class LoginComponent implements OnInit {
  loginData = {
    email : '',
    pwd : ''
  };

  constructor( public authService: AuthService) {}

  post() {
    this.authService.loginUser(this.loginData);
  }

  ngOnInit() {
  }

}
