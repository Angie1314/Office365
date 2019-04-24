import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagefooter',
  templateUrl: './pagefooter.component.html',
  styleUrls: ['./pagefooter.component.scss']
})
export class PagefooterComponent implements OnInit {
  srcUrlFB: string;
  srcUrlInstagram: string;
  srcUrlTwitter: string;

  constructor() { 
    this.srcUrlFB = "../../../../assets/images/fb.png";
    this.srcUrlInstagram = "../../../../assets/images/instagram.png";
    this.srcUrlTwitter = "../../../../assets/images/twitter.png";
  }

  ngOnInit() {
    
  }

}
