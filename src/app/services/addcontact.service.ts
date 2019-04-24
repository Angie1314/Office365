import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addcontact} from '../ models/addcontact';
import { map, mergeAll } from 'rxjs/operators';

const baseUrl = 'https://graph.microsoft.com/v1.0';
@Injectable({
  providedIn: 'root'
})
export class ContactAddService{

  constructor(private http: HttpClient) {
    
  }

  getContacts(): Observable<Addcontact> {
    return this.http
        .get(`${baseUrl}/me/contacts`)
        .pipe(
          map(x => (x as any).value),
          mergeAll()
        );
}

createContact(contact: Addcontact) {
  return this.http.post(`https://graph.microsoft.com/v1.0/me/contacts`, contact);
}

}

// getEvents(): Observable<Event> {
//   return this.http
//     .get(`${baseUrl}/me/events`)
//     .pipe(
//       map(x => (x as any).value),
//       mergeAll()
//     );
// }

// createEvent(event: CalendarEvent) {
//   return this.http.post(`${baseUrl}/me/events`, event);
// }
// }
