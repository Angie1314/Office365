import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HelpComponent } from './help/help.component';
import { SettingComponent } from './setting/setting.component';
import { AboutOfficeComponent } from './about-office/about-office.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mail-box',
    component: MailBoxComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
