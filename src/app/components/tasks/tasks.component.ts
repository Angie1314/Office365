import { Component, OnInit } from '@angular/core';
import { Task } from 'src/ models/task';
import { Observable } from 'rxjs';
import { TaskService } from 'src/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {
  
  task: Observable<Task>;
  avatar: string;
  
  constructor(private taskService: TaskService) { 
    this.avatar = "../../../../assets/images/rooms.png";
  }

  ngOnInit() {
    this.task = this.taskService.getTask();
  }
 
}
