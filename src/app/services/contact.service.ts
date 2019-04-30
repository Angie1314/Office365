import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';

const baseUrl = 'https://graph.microsoft.com/v1.0';
@Injectable({
  providedIn: 'root'
})

export class ContactService {
  mail: any;

  constructor(private http: HttpClient) {

  }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact>(`${baseUrl}/users`)
      .pipe(map(x => (x as any).value));
  }
}

