import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-office',
  templateUrl: './about-office.component.html',
  styleUrls: ['./about-office.component.scss']
})
export class AboutOfficeComponent implements OnInit {
  imgEmail = '../../../../assets/images/email.png';
  imgOneNote = '../../../../assets/images/oneNote.png';
  imgWord = '../../../../assets/images/word.png';
  imgExcel = '../../../../assets/images/excel.png';
  imgPowerpoint = '../../../../assets/images/powerpoint.png';
  imgAccess = '../../../../assets/images/access.png';
  imgMonitor = '../../../../assets/images/monitor.png';
  imgDevices = '../../../../assets/images/smartphones.png';
  imgComputer = '../../../../assets/images/computer.png';

  textForFeatures = 'It’s the tools you need Be more creative and achieve what matter';
  matCardTitleUpToDate = 'Up to date';
  matCardTitleFeatures = 'Features';
  upToDateText = 'With an Office 365 subscription, you get the latest Office apps.';
  devicesMatCardTitle = 'It is on all of your devices';
  devicesMatCardContent = 'Productivity wherever you are.';
  matCardTitleCloud = 'Its is your great work, in the cloud';
  matCardContentCloud = 'OneDrive makes the work you do available to you from anywhere – and to others when you collaborate or share.';

  constructor() { }

  ngOnInit() {
  }

}
