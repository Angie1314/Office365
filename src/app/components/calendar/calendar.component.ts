import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/ models/calendar';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/services/calendar.service';import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

  calendar: Observable<Calendar>;
  avatar: string;
  constructor(private calendarService: CalendarService) { 
    this.avatar = "../../../../assets/images/date.png";
  }

  ngOnInit() {
    this.calendar = this.calendarService.getCalendar();

    this.icon = "../../../../assets/images/icon.png";
    this.settings = "../../../../assets/images/settings.png";
    this.help = "../../../../assets/images/help.png";
  }

  onScroll(){
    let one = document.querySelector("#one");
    let two= document.querySelector('#two');
    let three = document.querySelector('#three');

    if (one){
        one.scrollIntoView();
    }
    else if(two){
        two.scrollIntoView();
    }
    else if(three){
        three.scrollIntoView();
    }
  }
}



