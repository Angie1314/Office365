import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contactspinner',
  templateUrl: './contactspinner.component.html',
  styleUrls: ['./contactspinner.component.scss']
})
export class ContactspinnerComponent implements OnInit {

  showSpinner = true;
  color = 'primary';
  mode = 'indeterminate';

  constructor() { }

  ngOnInit() { }
}


