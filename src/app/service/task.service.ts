import {EventEmitter, Injectable, Output} from '@angular/core';
import {Task} from '../model/task';
import {Http} from "@angular/http";
import {AppConstants} from "./app-constants";
import 'rxjs/Rx';

@Injectable()
export class TaskService {

  @Output() private taskAddedEvent: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private http: Http) { }

  find(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      this.http.get(AppConstants.API_URL + AppConstants.TASK_PATH).map((res) => {
        let body = res.json();
        if (body.ok) {
          let tasks = body.data.map((t) => {
            return Object.assign(new Task(), t);
          });
          console.log(tasks);
          return resolve(tasks);
        }
        return reject(body.message);
      }).subscribe();
    })
  }

  addTask(task: Task) {
    console.log(task);
    this.taskAddedEvent.emit(task);
  }

  taskAdded() {
    return this.taskAddedEvent;
  }

}
