import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../service/task.service";
import {NgForm} from "@angular/forms";
import {Http, Response} from "@angular/http";
import {AppConstants} from "../../service/app-constants";
import {Task} from "app/model/task";
import {Ng2ImgToolsService} from "ng2-img-tools";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  preview: boolean;
  pictures = [];

  constructor(private taskService: TaskService,
              private http: Http,
              private imageToolService: Ng2ImgToolsService) {
  }

  ngOnInit() {
  }

  onSaveTask(form: NgForm) {
    let task: Task = <Task>form.form.value;
    task.pictures = this.pictures;
    this.http.post(AppConstants.API_URL + AppConstants.TASK_PATH, task)
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

  onUploadPicture(event) {
    let file = event.target.files[0];
    if (file == null) {
      return;
    }
    this.imageToolService.resize([file], 320, 240).subscribe((result) => {
      let reader = new FileReader();
      reader.readAsDataURL(result);
      reader.onload = () => {
        this.pictures.push(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }, (error) => {
      console.log(error);
    });
  }

}
