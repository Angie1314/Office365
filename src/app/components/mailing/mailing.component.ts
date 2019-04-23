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
