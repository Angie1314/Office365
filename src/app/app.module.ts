


import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HelpComponent } from './components/help/help.component';
import { SettingComponent } from './components/setting/setting.component';
import { AboutOfficeComponent } from './components/about-office/about-office.component';
import { MailBoxComponent } from './components/mail-box/mail-box.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactaddComponent } from './components/contactadd/contactadd.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { MatGridListModule } from '@angular/material/grid-list';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule,
         MatMenuModule,
         MatSidenavModule,
         MatStepperModule,
         MatFormFieldModule,
         MatDividerModule,
         MatInputModule,
         MatProgressBarModule,
         MatButtonModule,
         MatRippleModule,
         MatListModule,
         MatCheckboxModule,
         
         } from '@angular/material';
         
import { CustomValidateDirective } from '../directive/custom-validate.directive';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from 'src/interceptors/token-interceptor';
// import { SearchComponent } from './components/search/search.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MailingComponent } from './components/mailing/mailing.component';
import { MailspinnerComponent } from './components/mailspinner/mailspinner.component';
import { CalendarspinnerComponent } from './components/calendarspinner/calendarspinner.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    MailBoxComponent,
    HelpComponent,
    SettingComponent,
    AboutOfficeComponent,
    CustomValidateDirective,
    ProfileComponent,
    ContactComponent,
    ContactaddComponent,
    TasksComponent,
    NewEventComponent,
    AppComponent,
    SpinnerComponent,
    MailingComponent,
    MailspinnerComponent,
    CalendarspinnerComponent,
    // SearchComponent,

  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSidenavModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatRippleModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
    NgxPageScrollCoreModule,
    BrowserModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    OAuthModule.forRoot()
  ],
  exports: [MatButtonModule, 
    MatProgressSpinnerModule,
    MatCheckboxModule, 
    MatToolbarModule,
    MatIconModule, 
    MatMenuModule, 
    MatSidenavModule,
    MatStepperModule, 
    MatFormFieldModule, 
    MatDividerModule,
    MatCardModule, 
    MatInputModule,
    FormsModule, 
    MatProgressBarModule, 
    MatRippleModule,
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
 
})
export class AppModule { }