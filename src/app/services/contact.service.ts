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

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact>(`${baseUrl}/me/contacts`)
      .pipe(map(x => (x as any).value));
  }
  setContact(): Observable<Contact> {
    return this.http.post<Contact>(`${baseUrl}/me/contacts`, `${contentType}`);

  }
}

