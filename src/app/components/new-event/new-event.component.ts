
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CalendarEvent } from 'src/app/models/calendar-event';
import { ProfileApiService } from 'src/app/services/profile-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent {

  eventForm: FormGroup;
  writeSubject: string;


  event: CalendarEvent = {
    subject: '',
    start: { dateTime: '2019-07-18T17:00:00', timeZone: 'UTC' },
    end: { dateTime: '2019-07-18T18:00:00', timeZone: 'UTC' }
  };

  constructor(private graphApi: ProfileApiService, private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      subject: new FormControl(this.event.subject, [Validators.required]),
      start: new FormControl(this.event.start.dateTime, [Validators.required]),
      end: new FormControl(this.event.end.dateTime, [Validators.required])
    });
  }

  get subject(): AbstractControl {
    return this.eventForm
      .get('subject');
  }
  get timeZone(): AbstractControl {
    return this.eventForm
      .get('timeZone');
  }

  get start(): AbstractControl {
    return this.eventForm
      .get('start');
  }

  get end(): AbstractControl {
    return this.eventForm
      .get('end');
  }

  onSubmit() {

    this.event.subject = this.eventForm.controls.subject.value;
    // this.event.start = this.eventForm.controls.start.value;
    // this.event.end = this.eventForm.controls.end.value;
    console.log(this.eventForm.controls.start.value);

    this.graphApi
        .createEvent(this.event)
        .subscribe(() => this.eventForm.reset());

    if (this.eventForm.controls.subject.value) {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Event Added!',
          showConfirmButton: false,
          timer: 1500
        });
      }
  }
}
