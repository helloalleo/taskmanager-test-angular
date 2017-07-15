import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.userService.login(form.form.value).then(() => {
      console.log('Вы авторизованы как администратор');
    }).catch((err) => {
      console.log('Не удалось авторизоваться')
      this.errorMessage = err;
    });
  }

}
