import { Component, OnInit } from '@angular/core';
import { Task } from 'src/ models/task';
import { TaskService } from 'src/services/task.service';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {
  
  task: Task[]=[];
  avatar: string;

  constructor(private taskService: TaskService) { 
    this.avatar = "../../../../assets/images/rooms.png";
  }

  ngOnInit() {
  this.taskService.getTask()
  .subscribe(x=>{ this.task =x;
  });
  }
 
}
