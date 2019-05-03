import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
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

  event: CalendarEvent = {
    subject: 'Code review!',
    start: { dateTime: '2019-04-18T17:00:00', timeZone: 'UTC' },
    end: { dateTime: '2019-04-18T18:00:00', timeZone: 'UTC' }
  };

  constructor(private graphApi: ProfileApiService) {
    this.eventForm = new FormGroup({
      subject: new FormControl(this.event.subject, [ Validators.required ])
    });
  }

  get subject(): AbstractControl {
    return this.eventForm
     .get('subject');
  }

  onSubmit() {
    if (this.eventForm.valid) {
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
