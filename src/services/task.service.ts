import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../ models/task';
import { map } from 'rxjs/operators';

const baseUrl = 'https://graph.microsoft.com/beta';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTask(): Observable<Task[]> {
    return this.http.get<Task>(`${baseUrl}/me/findRooms`)
    .pipe(map(x=>(x as any).value));
  }
}
