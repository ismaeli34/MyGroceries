import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AppUser} from '../models/app.user';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;

  constructor(public authService: AuthService) {

    authService.user$.subscribe(appUser => this.appUser);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
