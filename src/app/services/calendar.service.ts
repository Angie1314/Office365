import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Calendar } from '../models/calendar';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  constructor(private http: HttpClient) {
  }

  getCalendar(): Observable<Calendar[]> {
    return this.http
     .get<Calendar>(`${environment.baseUrl}/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location`)
     .pipe(map(x => (x as any).value));
  }
}



