import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { environment } from 'src/environments/environment';
import { ODataResponse } from '../models/odata-response';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }

  // getContact(): Observable<Contact[]> {
  //   return this.http
  //     .get<Contact>(`${environment.baseUrl}/users`)
  //     .pipe(map(x => (x as any).value));
  // }

  getUsers(top?: number): Observable<ODataResponse<Contact[]>> {
    let queryString = '?$orderby=displayName';

    if (top) {
      queryString += `${queryString ? '&' : '?'}$top=${top}`;
    }

    return this.getNextUsers(`${environment.baseUrl}/users${queryString}`);

  }

  getNextUsers(nextLink: string): Observable<ODataResponse<Contact[]>> {
    return this.http.get<ODataResponse<Contact[]>>(nextLink);
  }

  // getEvents(): Observable<ODataResponse<CalendarEvent[]>> {
  //   return this.http.get<ODataResponse<CalendarEvent[]>>(`${environment.baseUrl}/me/events`);
  // }


  // createEvent(event: CalendarEvent) {
  //   return this.http
  //    .post(`${environment.baseUrl}/me/events`, event);
  // }
}

