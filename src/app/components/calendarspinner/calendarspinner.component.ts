import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendarspinner',
  templateUrl: './calendarspinner.component.html',
  styleUrls: ['./calendarspinner.component.scss']
})
export class CalendarspinnerComponent implements OnInit {
  progress=0;
  timer:number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.timer=setInterval(()=>{
            this.progress=this.progress+50;
      
            if(this.progress>=100){
              clearInterval(this.timer);
            }
      
            if(this.progress==100){
      
              this.router.navigate(['/calendar']);
              
            }
          },1000)
        }
  }

 