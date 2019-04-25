import { Component, OnInit } from '@angular/core';
import { GraphApiService } from 'src/app/services/graph-api.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/ models/profile';
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
  loginButton = 'Login';
  logoutButton = 'Logout';

  officeCalendar: string;
  officeContacts: string;
  icon: string;

  profile: Observable<Profile>;

  constructor(private graphApi: GraphApiService) {
    this.officeCalendar = '../../../../assets/images/officeCalendar.jpeg';
    this.officeContacts = '../../../../assets/images/officeContacts.jpeg';
    this.icon = '../../../../assets/images/icon.png';
  }

  ngOnInit() {
    this.profile = this.graphApi.getProfile();
  }

}
