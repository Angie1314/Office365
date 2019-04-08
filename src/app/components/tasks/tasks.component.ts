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
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.task = this.taskService.getTask();
}
}
