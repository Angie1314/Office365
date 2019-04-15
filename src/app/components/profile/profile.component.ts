import { Component, OnInit } from '@angular/core';
import { GraphApiService } from 'src/services/graph-api.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/ models/profile';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileComponent implements OnInit {
  seeFeautesText = 'Dashboard';

  profile: Observable<Profile>;
  officeMailImg: string;
  officeTaskImg: string;
  officeCalendar: string;
  officeContacts: string;
  icon: string;

  constructor(private graphApi: GraphApiService) {
    this.officeMailImg = "../../../../assets/images/officeMail.png";
    this.officeTaskImg= "../../../../assets/images/officeTask.png";
    this.officeCalendar = "../../../../assets/images/officeCalendar.jpeg";
    this.officeContacts= "../../../../assets/images/officeContacts.png";
    this.icon = "../../../../assets/images/icon.png";
  }
  imgAccess = '../../../../assets/images/access.png';

  ngOnInit() {
    this.profile = this.graphApi.getProfile();
  }

}
