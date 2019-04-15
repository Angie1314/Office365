import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-about-office',
  templateUrl: './about-office.component.html',
  styleUrls: ['./about-office.component.scss']
})

export class AboutOfficeComponent implements OnInit {

  imgOneNote: string;
  imgWord: string;
  imgExcel: string;
  imgPowerpoint: string;
  imgAccess: string;
  imgMonitor: string;
  imgDevices: string;
  imgComputer: string;
  imgEmail: string;

  textForFeatures = 'It’s the tools you need Be more creative and achieve what matter';
  matCardTitleUpToDate = 'Up to date';
  matCardTitleFeatures = 'Features';
  upToDateText = 'With an Office 365 subscription, you get the latest Office apps.';
  devicesMatCardTitle = 'It is on all of your devices';
  devicesMatCardContent = 'Productivity wherever you are.';
  matCardTitleCloud = 'Its is your great work, in the cloud';
  matCardContentCloud = 'OneDrive makes the work you do available to you from anywhere – and to others when you collaborate or share.';

  constructor() {
    this.imgEmail = "../../../../assets/images/email.png";
    this.imgOneNote = '../../../../assets/images/oneNote.png';
    this.imgWord = '../../../../assets/images/word.png';
    this.imgExcel = '../../../../assets/images/excel.png';
    this.imgPowerpoint = '../../../../assets/images/powerpoint.png';
    this.imgAccess = '../../../../assets/images/access.png';
    this.imgMonitor = '../../../../assets/images/monitor.png';
    this.imgDevices = '../../../../assets/images/smartphones.png';
    this.imgComputer = '../../../../assets/images/computer.png';
  }

  ngOnInit() {
  }

}
