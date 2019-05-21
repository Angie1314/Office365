import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AboutOfficeComponent } from './components/about-office/about-office.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewEventComponent } from './components/new-event/new-event.component';

const routes: Routes = [   {
    path: 'calendar',
    component: CalendarComponent
  }, {
    path: '',
    component: AboutOfficeComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'new-event',
    component: NewEventComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
