import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from 'src/ models/photo';

const baseUrl = 'https://graph.microsoft.com/v1.0';

@Injectable({
  providedIn: 'root'
})



export class PhotoService {
 
  constructor(private http: HttpClient) {


   }
   getPhoto(): Observable<Photo> {
    return this.http.get<Photo>(`${baseUrl}/me/photos/48x48/$value`,);
  }
}
