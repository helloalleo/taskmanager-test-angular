import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskComponent } from './component/task/task.component';
import { HomeComponent } from './component/home/home.component';
import {TaskService} from "./service/task.service";
import {FormsModule} from "@angular/forms";
import { DataFilterPipe } from './pipe/data-filter.pipe';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { AdminComponent } from './component/admin/admin.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LoginComponent } from './component/login/login.component';
import {Ng2Webstorage, WebStorageService} from 'ngx-webstorage';
import {UserService} from "./service/user.service";

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    DataFilterPipe,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    NgxDatatableModule,
    Ng2Webstorage,
    Ng2Webstorage.forRoot({prefix: 'taskmanager', separator: '.', caseSensitive: true}),
    AppRoutingModule
  ],
  providers: [
    TaskService,
    UserService,
    WebStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
