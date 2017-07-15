import { Component, OnInit } from '@angular/core';
import {LocalStorage, WebStorageService} from "ngx-webstorage";
import {AppConstants} from "../../service/app-constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @LocalStorage(AppConstants.LOGGED_IN_STORAGE_KEY) isLoggedIn: boolean;

  constructor(private webStorage: WebStorageService) { }

  ngOnInit() {
    this.webStorage.observe(AppConstants.LOGGED_IN_STORAGE_KEY).subscribe((val) => {
      console.log(val);
    })
  }

}
