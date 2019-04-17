import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../ models/contact';
import { map } from 'rxjs/operators';

const baseUrl = 'https://graph.microsoft.com/v1.0';
const contentType = "application/json";
@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) {
  }

  // getContact(): Observable<Contact> {
  //   return this.http.get<Contact>(`${baseUrl}/me/contacts`);
  // }
  getContact(): Observable<Contact[]> {
    return this.http.get<Contact>(`${baseUrl}/me/contacts`)
      .pipe(map(x => (x as any).value));
  }
  setContact(): Observable<Contact> {
    return this.http.post<Contact>(`${baseUrl}/me/contacts`, `${contentType}`);

  }
}
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

