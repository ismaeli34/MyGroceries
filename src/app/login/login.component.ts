import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 
import * as firebase from 'firebase';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService) {
  }

  login() {
    this.authService.login();

  }

}
