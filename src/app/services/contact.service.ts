import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ODataResponse } from '../models/odata-response';
import { Search} from '../models/search-response';
import { Contact } from '../models/contact';
import { map } from 'rxjs/operators';

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

  searchByName(displayName: string): Observable<Search[]> {
    return this.http
    .get<Search>(`${environment.baseUrl}/users?$filter=startswith(givenName%2C+'${displayName}')`)
    .pipe(map(x => (x as any).value));
  }

  createContact(contact: Contact) {
    return this.http.post(`${environment.baseUrl}/users`, contact);
  }
}


