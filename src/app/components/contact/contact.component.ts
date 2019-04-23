import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/ models/contact';
import { ContactService } from 'src/services/contact.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';


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
    this.icon = "../../../../assets/images/icon.png";
    this.settings = "../../../../assets/images/settings.png";
    this.help = "../../../../assets/images/help.png";
    this.avatar = "../../../../assets/images/avatar.png";
    this.search = "../../../../assets/images/search.png";

  }

  ngOnInit() {

    this.contactService.getContact()
      .subscribe(x => {
        this.contact = x;
      });
  }

  searchFunction(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export class PhonePipe implements PipeTransform {

  transform(phoneValue: number | string, country: string): any {
    try {
      const phoneNumber = parsePhoneNumber(phoneValue + '', country as CountryCode);
      return phoneNumber.formatNational();
    } catch (error) {
      return phoneValue;
    }
  }


}


// export class TasksComponent implements OnInit {

//   task: Task[]=[];
//   avatar: string;

//   constructor(private taskService: TaskService) { 
//     this.avatar = "../../../../assets/images/rooms.png";
//   }

//   ngOnInit() {
//   this.taskService.getTask()
//   .subscribe(x=>{ this.task =x;
//   });
//   }

// }
