import {Component, OnInit} from '@angular/core';
import {Task} from '../../model/task';
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

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
      name: 'Завершена',
      prop: 'completed',
      sortable: true
    }
  ];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.taskAdded().subscribe((task) => {
      this.tasks.push(task);
    });
    this.taskService.find().then((tasks) => {
      this.tasks = tasks;
    });
  }

}
