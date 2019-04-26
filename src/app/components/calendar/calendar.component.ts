import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/app/ models/calendar';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  icon: string;
  settings: string;
  help: string;

  settingsText = 'Settings';
  helpText = 'Help';
  signupText = 'Sign up';
  mailboxText = 'Mail Box';
  calendarText = 'Calendar';
  officeLogo = 'Office 365';

  avatar: string;

  showSpinner = true;
  color = 'primary';
  mode = 'indeterminate';

   calendar: Calendar[] = [];

  constructor(private calendarService: CalendarService) {
    this.avatar = '../../../../assets/images/date.png';
    this.icon = '../../../../assets/images/icon.png';
    this.settings = '../../../../assets/images/settings.png';
    this.help = '../../../../assets/images/help.png';
  }

  ngOnInit() {
   this.calendarService.getCalendar()
  .subscribe(x => { this.calendar = x ; });
    // this.calendar.subscribe(() => this.showSpinner = false);
  }
}
