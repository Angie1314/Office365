import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent {

  contactForm: FormGroup;

  contact: Contact = {
    displayName: 'string',
    surname: 'string',
    userPrincipalName: ''

  };

  constructor( private contactService: ContactService) {
    this.contactForm = new FormGroup({
      displayName: new FormControl(this.contact.displayName, [ Validators.required ])
    });
  }

  get displayName(): AbstractControl {
    return this.contactForm.get('displayName');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService
        .createContact(this.contact)
        .subscribe(() => this.contactForm.reset());
    }
  }
}
