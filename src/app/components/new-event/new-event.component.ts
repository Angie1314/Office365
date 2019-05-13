import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ProfileApiService } from 'src/app/services/profile-api.service';
import { Calendar } from 'src/app/models/calendar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent {

  eventForm: FormGroup;
  subjectAdd: string;

  event: Calendar = {
    subject: 'Code review!',
    start: { dateTime: '2019-07-18T17:00:00', timeZone: 'UTC' },
    end: { dateTime: '2019-07-18T18:00:00', timeZone: 'UTC' }
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
      this.graphApi
      .createEvent(this.event)
      .subscribe(() => this.eventForm.reset());

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
