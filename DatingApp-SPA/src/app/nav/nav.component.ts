import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
/** nav component*/
export class NavComponent {

  model: any = {};
  /** nav ctor */
  constructor(private authService: AuthService) {

  }

  login() {
    //console.log(this.model);
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Logged in successfully');
      },
      error => {
        console.log('Failed to login');
      });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
