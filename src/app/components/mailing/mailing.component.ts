import { Component, OnInit } from '@angular/core';

import { Email } from 'src/ models/email';
import { Observable } from 'rxjs';
import { EmailService } from 'src/services/email.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.scss']
})
export class MailingComponent implements OnInit {
  email: Observable<Email>;
  avatar: string;
  constructor(private emailService: EmailService) { 
    this.avatar = "../../../../assets/images/emails.png";
  }
    
  ngOnInit() {
        this.email = this.emailService.getEmail();
  }

}
// import { Component, OnInit } from '@angular/core';
// import { Email } from 'src/ models/email';
// import { Observable } from 'rxjs';
// import { EmailService } from 'src/services/email.service';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// @NgModule({
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// @Component({
//   selector: 'app-mail-box',
//   templateUrl: './mail-box.component.html',
//   styleUrls: ['./mail-box.component.scss']
// })
// export class MailBoxComponent implements OnInit {
//   shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
//   icon = '../../../../assets/images/icon.png';
//   settings = '../../../../assets/images/settings.png';
//   help = '../../../../assets/images/help.png';

//   settingsText = 'Settings';
//   helpText = 'Help';
//   signupText = 'Sign up';
//   mailboxText = 'Mail Box';
//   calendarText = 'Calendar';
//   officeLogo = 'Office 365';

//   email: Observable<Email>;
//   avatar: string;

//   constructor(private emailService: EmailService) {
//     this.avatar = "../../../../assets/images/emails.png";
//   }

//   ngOnInit() {
//     this.email = this.emailService.getEmail();
//   }
// }