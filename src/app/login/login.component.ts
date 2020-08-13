import {Component} from '@angular/core';
import {LoginService} from '../login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private service: LoginService, private router: Router, private route: ActivatedRoute,) {
  }


  doLogin(form: NgForm) {
    console.log(this.username, this.password, form.value);
    this.service.authenticationService(this.username, this.password).subscribe(data => {

      this.router.navigate(['/gallery']);
    });
  }

}
