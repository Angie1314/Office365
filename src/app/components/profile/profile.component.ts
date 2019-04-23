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
  officeLogo = 'Welcome to Office 365';
  arrowDown = 'keyboard_arrow_down';
  loginButton = 'Login';
  logoutButton = 'Logout';
  profile: Observable<Profile>;
  officeMailImg: string;
  officeTaskImg: string;
  officeCalendar: string;
  officeContacts: string;
  maillBox: string;
  icon: string;

  constructor(private graphApi: GraphApiService) {
    this.officeMailImg = "../../../../assets/images/officeMail.png";
    this.officeTaskImg = "../../../../assets/images/task.png";
    this.officeCalendar = "../../../../assets/images/officeCalendar.png";
    this.officeContacts = "../../../../assets/images/officeContacts.png";
    this.icon = "../../../../assets/images/icon.png";
    this.maillBox = "FIND ME"
  }
  imgAccess = '../../../../assets/images/access.png';

  ngOnInit() {
    this.profile = this.graphApi.getProfile();
  }

}
