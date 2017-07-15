import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../service/task.service";
import {NgForm} from "@angular/forms";
import {Http, Response} from "@angular/http";
import {AppConstants} from "../../service/app-constants";
import {Task} from "app/model/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  preview: boolean;
  pictures: string[];

  constructor(private taskService: TaskService, private http: Http) { }

  ngOnInit() {
  }

  onSaveTask(form: NgForm) {
    this.http.post(AppConstants.API_URL + AppConstants.TASK_PATH, form.form.value)
      .subscribe((res: Response) => {
        let body = res.json();
        if (body.ok) {
          console.log(body.data);
          this.taskService.addTask(<Task>body.data);
          return;
        }
        console.log(body.message);
      })
  }

}
