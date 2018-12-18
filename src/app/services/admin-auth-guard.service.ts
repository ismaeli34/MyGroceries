import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.user$
      .switchMap(user => this.userService.get(user.uid))
      .map(appUser => appUser.isAdmin);

  }
}
