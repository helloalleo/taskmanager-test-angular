import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Task} from "app/model/task";
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  tasks: Task[];
  editing = {};
  selected = [];
  columns: Array<any> = [
    {
      name: 'Имя пользователя',
      prop: 'username',
      sortable: true
    },
    {
      name: 'E-mail',
      prop: 'email',
      sortable: true,
    },
    {
      name: 'Текст',
      prop: 'content',
      sortable: true,
    },
    {
      name: 'Завершена',
      prop: 'completed',
      sortable: true
    }
  ];

  constructor(private taskService: TaskService, private userService: UserService) { }

  ngOnInit() {
    this.taskService.find().then((tasks) => {
      this.tasks = tasks;
    });
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.tasks[row.$$index][cell] = event.target.value;
    this.taskService.save(this.tasks[row.$$index]);
  }

  onSelect({selected}) {
    console.log(selected);
  }

  logout() {
    this.userService.logout();
  }

}
