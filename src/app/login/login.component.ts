import {Component, Input} from '@angular/core';


import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = '';
  password = '';
  invalidLogin = false;
  @Input() error: string | null;

  constructor(private router: Router,
              private loginservice: AuthenticationService) {
  }


  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['gallery']);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
          this.error = error.message;

        }
      )
    );

  }
}
