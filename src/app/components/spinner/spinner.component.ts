import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { Calendar } from 'src/app/models/calendar';
import { Search } from 'src/app/models/search-response';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  calendar: Observable<Calendar[]>;
  showSpinner = true;
  searchRes: Observable<Search[]>;
  displayName: string;

  color = 'primary';
  mode = 'indeterminate';

  constructor(private calendarService: CalendarService, private contactService: ContactService) { }

  ngOnInit() {
    this.calendar = this.calendarService
      .getCalendar();
    this.calendar
      .subscribe(() => this.showSpinner = false);
    this.searchRes = this.contactService
      .searchByName(this.displayName);
    this.searchRes
      .subscribe(() => this.showSpinner = false);
  }

}
