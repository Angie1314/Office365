import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';

import { CalendarComponent } from './components/calendar/calendar.component';
import { AboutOfficeComponent } from './components/about-office/about-office.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewEventComponent } from './components/new-event/new-event.component';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

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
         MatProgressSpinnerModule,
         MatCardModule,
         MatGridListModule,
         } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from 'src/app/interceptors/token-interceptor';
import { PagefooterComponent } from './components/page-footer/pagefooter.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ContactspinnerComponent } from './components/contactspinner/contactspinner.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AboutOfficeComponent,
    ProfileComponent,
    ContactComponent,
    NewEventComponent,
    AppComponent,
    PagefooterComponent,
    HeaderComponent,
    SpinnerComponent,
    ContactspinnerComponent,
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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {

}
