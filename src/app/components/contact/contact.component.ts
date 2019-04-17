import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/ models/contact';
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
  search: string;

  settingsText = 'Settings';
  helpText = 'Help';
  signupText = 'Sign up';
  mailboxText = 'Mail Box';
  calendarText = 'Calendar';
  officeLogo = 'Office 365';

  usersArray:[];

  contact: Contact[]=[];
 
  constructor(private contactService: ContactService) {
  

   }

  ngOnInit() {

        this.contactService.getContact()
        .subscribe(x=>{ this.contact =x;
        });
        
       

    this.icon = "../../../../assets/images/icon.png";
    this.settings = "../../../../assets/images/settings.png";
    this.help = "../../../../assets/images/help.png";
    this.avatar = "../../../../assets/images/avatar.png";
    this.search = "../../../../assets/images/search.png";
 
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
