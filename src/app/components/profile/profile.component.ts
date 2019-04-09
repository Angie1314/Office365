import { Component, OnInit } from '@angular/core';
import { GraphApiService } from 'src/services/graph-api.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/ models/profile';
import { Photo } from 'src/ models/photo';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  seeFeautesText = 'Dashboard';

  profile: Observable<Profile>;
  officeMailImg: string;
  officeTaskImg: string;
  officeCalendar: string;
  officeContacts: string;

  constructor(private graphApi: GraphApiService) {
    this.officeMailImg = "../../../../assets/images/officeMail.png";
    this.officeTaskImg= "../../../../assets/images/officeTask.png";
    this.officeCalendar = "../../../../assets/images/officeCalendar.png";
    this.officeContacts= "../../../../assets/images/officeContacts.png";
  }

  color = 'primary';
  mode = 'determinate';
  value = 50;

  imgAccess = '../../../../assets/images/access.png';
  tiles: Tile[] = [
    { text: 'Tile 1', cols: 2, rows: 1, border: '3px double #2196F3' },
    { text: 'Tile 2', cols: 2, rows: 1, border: '3px double #2196F3' },
    { text: 'Tile 3', cols: 2, rows: 1, border: '3px double #2196F3' },
    { text: 'Tile 4', cols: 2, rows: 1, border: '3px double #2196F3' },
  ];

  ngOnInit() {
    this.profile = this.graphApi.getProfile();
  }

}
