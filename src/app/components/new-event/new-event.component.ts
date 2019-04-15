import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { CalendarEvent } from 'src/ models/calendar-event';
import { GraphApiService } from 'src/services/graph-api.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent {

  eventForm: FormGroup;

  event: CalendarEvent = {
    subject: 'Angular workshop!',
    start: { dateTime: '2019-04-10T17:00:00', timeZone: 'UTC' },
    end: { dateTime: '2019-04-10T18:00:00', timeZone: 'UTC' }
  };

  constructor(private graphApi: GraphApiService) {
    this.eventForm = new FormGroup({
      subject: new FormControl(this.event.subject, [Validators.required]),
      start: new FormControl(this.event.start, [Validators.required]),
      end: new FormControl(this.event.end, [Validators.required])
    });
  }

  get subject(): AbstractControl {
    return this.eventForm.get('subject');
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.graphApi
        .createEvent(this.event)
        .subscribe(() => this.eventForm.reset());

    }
  }

}