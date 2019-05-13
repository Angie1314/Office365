import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { Profile } from '../models/profile';
import { environment } from 'src/environments/environment';
import { Calendar } from '../models/calendar';
@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.http
      .get<Profile>(`${environment.baseUrl}/me/`);
  }

  getEvents(): Observable<Event> {
    return this.http
      .get(`${environment.baseUrl}/me/events`)
      .pipe(
        map(x => (x as any).value),
        mergeAll()
      );
  }

  createEvent(event: Calendar) {
    return this.http.post(`${environment.baseUrl}/me/events`, event);
  }
}


