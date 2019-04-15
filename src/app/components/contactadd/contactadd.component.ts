import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactAddService } from 'src/services/addcontact.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-contactadd',
  templateUrl: './contactadd.component.html',
  styleUrls: ['./contactadd.component.scss']
})
export class ContactaddComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  contactadd: Observable<ContactAddService>;
  constructor(private contactService:  ContactAddService) { }

  ngOnInit() {
    // this.contactadd = this.contactService.getContact();
  }

}
