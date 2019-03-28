import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  icon = '../../../../assets/images/icon.png';
  settings = '../../../../assets/images/settings.png';
  help = '../../../../assets/images/help.png';
  constructor() { }

  ngOnInit() {
  }

}
