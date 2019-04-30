import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-about-office',
  templateUrl: './about-office.component.html',
  styleUrls: ['./about-office.component.scss']
})

export class AboutOfficeComponent {

  imgOneNote = '../../../../assets/images/oneNote.png';
  imgMonitor = '../../../../assets/images/monitor.png';
  imgDevices = '../../../../assets/images/smartphones.png';
  imgComputer =  '../../../../assets/images/computer.png';

  textForFeatures = 'It’s the tools you need be more creative.';
  matCardTitleUpToDate = 'Up to date';
  matCardTitleFeatures = 'Features';
  upToDateText = 'With an Office 365 subscription, you get the latest Office apps.';
  devicesMatCardTitle = 'It is on all of your devices';
  devicesMatCardContent = 'Productivity wherever you are.';
  matCardTitleCloud = 'Cloud Features';
  matCardContentCloud = 'Its is your great work, in the cloud';

  constructor() { }
}
