import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AboutOfficeComponent } from './components/about-office/about-office.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from '../../src/app/app.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { PagefooterComponent } from './components/page-footer/pagefooter.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

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
    path: 'new-event',
    component: NewEventComponent
  },

  {
    path: 'calendar',
    component: CalendarComponent
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
   path: 'page-footer',
   component: PagefooterComponent
 },

 {
  path: 'header',
  component: HeaderComponent
 },

 {
   path: 'menu-bar',
   component: MenuBarComponent
 },
 {
  path: 'spinner',
  component: SpinnerComponent
},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
