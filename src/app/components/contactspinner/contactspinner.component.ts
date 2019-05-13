import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
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

  constructor() { }

  ngOnInit() { }
}


