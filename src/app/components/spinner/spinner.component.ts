import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { Calendar } from 'src/app/models/calendar';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  calendar: Observable<Calendar[]>;
  showSpinner = true;
  color = 'primary';
  mode = 'indeterminate';

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendar = this.calendarService.getCalendar();
    this.calendar.subscribe(() => this.showSpinner = false);
  }

}
