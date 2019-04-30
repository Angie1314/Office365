import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contactspinner',
  templateUrl: './contactspinner.component.html',
  styleUrls: ['./contactspinner.component.scss']
})
export class ContactspinnerComponent implements OnInit {
  contact: Observable<Contact[]>;

  showSpinner = true;
  color = 'primary';
  mode = 'indeterminate';

  constructor( private contactService: ContactService) { }

  ngOnInit() {
        this.contact = this.contactService.getContact();
        this.contact.subscribe(() => this.showSpinner = false);
  }
}


