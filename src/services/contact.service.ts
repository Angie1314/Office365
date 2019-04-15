import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact} from '../ models/contact';

const baseUrl = 'https://graph.microsoft.com/v1.0';
const contentType="application/json";
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  getContact(): Observable<Contact> {
    return this.http.get<Contact>(`${baseUrl}/me/contacts`);
  }

  setContact(): Observable<Contact> {
    return this.http.post<Contact>(`${baseUrl}/me/contacts`,`${contentType}`);
      
  //   post<T>(url: string, body: any | null, options?: {
  //     headers?: HttpHeaders | {
  //         [header: string]: string | string[];
  //     };
  //     observe?: 'body';
  //     params?: HttpParams | {
  //         [param: string]: string | string[];
  //     };
  //     reportProgress?: boolean;
  //     responseType?: 'json';
  //     withCredentials?: boolean;
  // }): Observable<T>;
  // }
}
}
