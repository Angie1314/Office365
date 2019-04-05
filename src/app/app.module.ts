


import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MaterialModule } from './material';

import { MatToolbarModule,
         MatIconModule,
         MatMenuModule,
         MatSidenavModule,
         MatStepperModule,
         MatFormFieldModule,
         MatDividerModule,
         MatCardModule,
         MatInputModule,
         MatProgressBarModule,
         MatButtonModule,
         MatRippleModule,
         MatListModule,
         MatGridListModule,
         
         } from '@angular/material';
         
import { CustomValidateDirective } from '../directive/custom-validate.directive';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from 'src/interceptors/token-interceptor';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
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
    OAuthModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
   
})
export class AppModule { }