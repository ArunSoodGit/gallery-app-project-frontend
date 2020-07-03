import {Component} from '@angular/core';
import {LoginService} from '../../../login.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string;
  password: string;
  message: any;

  constructor(private service: LoginService, private router: Router) {
  }


  doLogin(form: NgForm) {
    console.log(this.username, this.password, form.value )
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      this.router.navigate(['/home']);
    });
  }

}
