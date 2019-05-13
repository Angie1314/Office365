import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { ProfileApiService } from 'src/app/services/profile-api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  seeFeautesText = 'Dashboard';
  officeLogo = 'Welcome to Office 365';
  loginButton = 'Login';
  logoutButton = 'Logout';
  officeCalendar = '../../../../assets/images/officeCalendar.jpeg';
  officeContacts = '../../../../assets/images/officeContacts.jpeg';
  icon = '../../../../assets/images/icon.png';
  avatarImg = '../../../../assets/images/avatar2.png';

  profile: Observable<Profile>;

  constructor(private graphApi: ProfileApiService) { }

  ngOnInit() {
    this.profile = this.graphApi
     .getProfile();
  }
}
