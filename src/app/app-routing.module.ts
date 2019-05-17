import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AboutOfficeComponent } from './components/about-office/about-office.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [   {
    path: 'calendar',
    canActivate: [ AuthGuard ],
    component: CalendarComponent
  }, {
    path: '',
    component: AboutOfficeComponent
  }, {
    path: 'contact',
    canActivate: [ AuthGuard ],
    component: ContactComponent
  }, {
    path: 'new-event',
    canActivate: [ AuthGuard ],
    component: NewEventComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
