import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../ models/profile';
import { Photo } from 'src/ models/photo';

const baseUrl = 'https://graph.microsoft.com/v1.0';

@Injectable({
  providedIn: 'root'
})
export class GraphApiService {

  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${baseUrl}/me/`);
  }
  
  getPhoto(): Observable<Photo> {
    return this.http.get<Photo>(`${baseUrl}/me/photo/$value`);
  }
}
