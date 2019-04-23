import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from 'src/ models/email';

const baseUrl = 'https://graph.microsoft.com/v1.0';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  getEmail(): Observable<Email> {
    return this.http.get<Email>(`${baseUrl}/me/messages`);
  }
}
