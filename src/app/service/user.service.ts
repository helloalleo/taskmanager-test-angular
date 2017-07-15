import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppConstants} from "./app-constants";
import {LocalStorage} from "ngx-webstorage/dist/decorators";

@Injectable()
export class UserService {

  @LocalStorage(AppConstants.LOGGED_IN_STORAGE_KEY) isLoggedIn: boolean;

  constructor(private http: Http) { }

  login(value: { username: string, password: string }) {
    this.http.post(AppConstants.API_URL + AppConstants.LOGIN_PATH, value).subscribe((res) => {
      let body = res.json();
      if (body.ok) {
        this.isLoggedIn = true;
        console.log('Вы авторизованы как администратор');
        return;
      }
      this.isLoggedIn = false;
      console.log('Не удалось авторизоваться')
    })
  }

}
