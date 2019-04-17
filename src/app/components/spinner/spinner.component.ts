import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  progress = 0;
  timer: number;
  // dataServiceProcessed: boolean;

  constructor(private router: Router) {
    // this.dataServiceProcessed = false;
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 50;

      if (this.progress >= 100) {
        clearInterval(this.timer);
      }

      if (this.progress == 100) {
        this.router.navigate(['/contact']);

        // this.dataServiceProcessed = true;

      }
    }, 1000)
  }

}
