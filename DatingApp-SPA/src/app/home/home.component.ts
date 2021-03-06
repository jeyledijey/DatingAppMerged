import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
/** home component*/
export class HomeComponent implements OnInit {

  registerMode = false;

  /** home ctor */
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;//!this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
