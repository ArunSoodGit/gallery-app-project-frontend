import {Component, OnInit} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faCoffee = faCoffee;

  constructor(public loginService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

}
