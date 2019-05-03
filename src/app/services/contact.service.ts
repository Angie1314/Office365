import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ODataResponse } from '../models/odata-response';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

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
}

