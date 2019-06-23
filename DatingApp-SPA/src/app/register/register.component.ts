import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
/** register component*/
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  /** register ctor */
  constructor(private authService: AuthService) {

  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log("Registration successful");
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
