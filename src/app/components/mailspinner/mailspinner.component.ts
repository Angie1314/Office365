import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mailspinner',
  templateUrl: './mailspinner.component.html',
  styleUrls: ['./mailspinner.component.scss']
})
export class MailspinnerComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 50;

      if (this.progress >= 100) {
        clearInterval(this.timer);
      }

      if (this.progress == 100) {

        this.router.navigate(['/tasks']);

      }
    }, 1000)
  }

}

