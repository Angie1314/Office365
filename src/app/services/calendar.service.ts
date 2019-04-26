import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calendar } from '../ models/calendar';
import { map } from 'rxjs/operators';


const baseUrl = 'https://graph.microsoft.com/v1.0';

@Injectable({
  providedIn: 'root'
})


export class CalendarService {

  constructor(private http: HttpClient) {
  }

  getCalendar(): Observable<Calendar[]> {
    return this.http.get<Calendar>(`${baseUrl}/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location`)
    .pipe(map(x => (x as any).value));
  }
}
//   getTask(): Observable<Task[]> {
//     return this.http.get<Task>(`${baseUrl}/me/findRooms`)
//     .pipe(map(x=>(x as any).value));
//   }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Task } from '../ models/task';
// import { map } from 'rxjs/operators';

// const baseUrl = 'https://graph.microsoft.com/beta';
// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   constructor(private http: HttpClient) {
//   }

//   getTask(): Observable<Task[]> {
//     return this.http.get<Task>(`${baseUrl}/me/findRooms`)
//     .pipe(map(x=>(x as any).value));
//   }
// }



