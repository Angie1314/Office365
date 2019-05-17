import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { Calendar } from 'src/app/models/calendar';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  icon = '../../../../assets/images/icon.png';
  settings = '../../../../assets/images/settings.png';
  help = '../../../../assets/images/help.png';
  avatar = '../../../../assets/images/date.png';
  avatarImg = '../../../../assets/images/calendars.jpg';

  settingsText = 'Settings';
  helpText = 'Help';
  signupText = 'Sign up';
  mailboxText = 'Mail Box';
  calendarText = 'Calendar';
  officeLogo = 'Office 365';

  showSpinner = true;
  color = 'primary';
  mode = 'indeterminate';

  calendar: Calendar[] = [];
  calendars: Observable<Calendar[]>;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  @ViewChild('stepper') stepper: MatStepper;
  constructor(private calendarService: CalendarService, public dialog: MatDialog) { }

  ngOnInit() {
    this.calendarService.getCalendar()
      .subscribe(x => { this.calendar = x; });

    this.calendars
      .subscribe(() => this.showSpinner = false);

  }
  move(index: number) {
    this.stepper.selectedIndex = index;
  }
}
