import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/ models/contact';
import { Observable } from 'rxjs';
import { ContactService } from 'src/services/contact.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

  settingsText = 'Settings';
  helpText = 'Help';
  signupText = 'Sign up';
  mailboxText = 'Mail Box';
  calendarText = 'Calendar';
  officeLogo = 'Office 365';

  contact: Observable<Contact>;
 
 
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contact = this.contactService.getContact();
   

    this.icon = "../../../../assets/images/icon.png";
    this.settings = "../../../../assets/images/settings.png";
    this.help = "../../../../assets/images/help.png";
    this.avatar = "../../../../assets/images/avatar.png";
  }
}
