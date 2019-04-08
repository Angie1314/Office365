import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

}
