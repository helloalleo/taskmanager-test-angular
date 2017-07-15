import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppConstants} from "./app-constants";
import {LocalStorage} from "ngx-webstorage/dist/decorators";
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  @LocalStorage(AppConstants.LOGGED_IN_STORAGE_KEY) isLoggedIn: boolean;

  constructor(private http: Http, private router: Router) { }

  login(value: { username: string, password: string }) {
    return new Promise((resolve, reject) => {
      this.http.post(AppConstants.API_URL + AppConstants.LOGIN_PATH, value).subscribe((res) => {
        let body = res.json();
        if (body.ok) {
          this.isLoggedIn = true;
          this.router.navigate(['/home']);
          return resolve(true);
        }
        this.isLoggedIn = false;
        return reject('Не удалось авторизоваться');
      })
    })
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }

}
