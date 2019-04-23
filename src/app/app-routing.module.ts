import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HelpComponent } from './components/help/help.component';
import { SettingComponent } from './components/setting/setting.component';
import { AboutOfficeComponent } from './components/about-office/about-office.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactaddComponent } from './components/contactadd/contactadd.component';
import { AppComponent } from '../../src/app/app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { MailingComponent } from './components/mailing/mailing.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  { path: 'logout/:id',      
    component: AppComponent },

  {
    path: 'mailing',
    component: MailingComponent
  },

  {
    path: 'new-event',
    component: NewEventComponent
  },

  {
    path: 'calendar',
    component: CalendarComponent
  },

  {
    path: 'help',
    component: HelpComponent
  },

  {
    path: 'setting',
    component: SettingComponent
  },
  
  {
    path: 'about-office',
    component: AboutOfficeComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'contactadd',
    component: ContactaddComponent
  },

  {
    path: 'tasks',
    component: TasksComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
