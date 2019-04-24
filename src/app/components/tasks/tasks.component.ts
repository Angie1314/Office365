import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/ models/task';


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

  constructor() { 

  }

  ngOnInit() {

  }
 
}
