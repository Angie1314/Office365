import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactAddService } from 'src/services/addcontact.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Addcontact } from 'src/ models/addcontact';
import Swal from 'sweetalert2';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-contactadd',
  templateUrl: './contactadd.component.html',
  styleUrls: ['./contactadd.component.scss']
})
export class ContactaddComponent implements OnInit {

  contact: Addcontact = {
    givenName: 'Jack Johnson',
  };

  contactadd: Observable<ContactAddService>;
  constructor(private contactService: ContactAddService) { }
    eventForm = new FormGroup({
      givenName: new FormControl(this.contact.givenName, [Validators.required]),
 
  });
  ngOnInit() {

  }
    get givenName(): AbstractControl {
      return this.eventForm.get('givenName');
    }

    onSubmit() {
      if (this.eventForm.valid) {
        this.contactService
          .createContact(this.contact)
          .subscribe(() => this.eventForm.reset());

          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Contact Added!',
            showConfirmButton: false,
            timer: 1500
          })
      }
    }
}




