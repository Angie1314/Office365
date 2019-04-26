import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/ models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';


// tslint:disable-next-line:use-pipe-transform-interface
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Pipe({
  name: 'phone'
})

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  icon: string;
  settings: string;
  help: string;
  avatar: string;
  search: string;

  settingsText = 'Settings';
  helpText = 'Help';
  signupText = 'Sign up';
  mailboxText = 'Mail Box';
  calendarText = 'Calendar';
  officeLogo = 'Office 365';

  contact: Contact[] = [];
  dataSource = new MatTableDataSource<Contact>();

  constructor(private contactService: ContactService) {
    this.icon = '../../../../assets/images/icon.png';
    this.settings = '../../../../assets/images/settings.png';
    this.help = '../../../../assets/images/help.png';
    this.avatar = '../../../../assets/images/avatar.png';
    this.search = '../../../../assets/images/search.png';

  }

  ngOnInit() {

    this.contactService.getContact()
      .subscribe(x => {
        this.contact = x;
      });
  }

}


