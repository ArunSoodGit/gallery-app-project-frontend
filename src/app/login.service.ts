import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  username: string;
  password: string;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8080/login', {headers, responseType: 'text' as 'json'});

  }

  authenticationService(username: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8080/login', {headers, responseType: 'text' as 'json'});
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return false;
    }
    return true;
  }

  getLoggedInUserName() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return '';
    }
    return user;
  }
}
