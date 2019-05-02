import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ODataResponse } from 'src/app/models/odata-response';
@Component({
  selector: 'app-contactspinner',
  templateUrl: './contactspinner.component.html',
  styleUrls: ['./contactspinner.component.scss']
})
export class ContactspinnerComponent implements OnInit {
  contact: ODataResponse<Contact[]>;

  showSpinner = true;
  color = 'primary';
  mode = 'indeterminate';

  constructor( private contactService: ContactService) { }

  ngOnInit() {
        // this.contact = this.contactService
        //  .getUsers();
        // this.contact
        //  .subscribe(() => this.showSpinner = false);
  }
}


