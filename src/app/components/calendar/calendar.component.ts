import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/ models/calendar';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  icon = '../../../../assets/images/icon.png';
  settings = '../../../../assets/images/settings.png';
  help = '../../../../assets/images/help.png';

  settingsText = 'Settings';
  helpText = 'Help';
  signupText = 'Sign up';
  mailboxText = 'Mail Box';
  calendarText = 'Calendar';
  officeLogo = 'Office 365';

  calendar: Observable<Calendar>;
  constructor(private Calendar:CalendarService) { }

  ngOnInit() {
    this.calendar = this.Calendar.getCalendar();
  }
  // profile: Observable<Profile>;
  // constructor(private graphApi: GraphApiService) { }

  // color = 'primary';
  // mode = 'determinate';
  // value = 50;

  // imgAccess = '../../../../assets/images/access.png';

  // ngOnInit() {
  //   this.profile = this.graphApi.getProfile();
  //   // this.photo=this.graphApi.getPhoto();
  // }
}
