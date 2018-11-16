import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  registerData = {
    // email: '',
    // pwd: '',
    // name: '',
    // description: ''
  };

  constructor( public authService: AuthService) {}

  post() {
    console.log(this.registerData);
    this.authService.registerUser(this.registerData);
  }

  ngOnInit() {
  }

}
