import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactAdd } from '../ models/addcontact';

const baseUrl = 'https://graph.microsoft.com/v2.0';
const contentType="application/json";
@Injectable({
  providedIn: 'root'
})
export class ContactAddService{

  constructor(private http: HttpClient) {
  }

  setContact(): Observable<ContactAdd> {
    return this.http.post<ContactAdd>(`${baseUrl}/me/contacts`,`${contentType}`);
      
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
