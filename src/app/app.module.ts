import { NgModule , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AboutOfficeComponent } from './components/about-office/about-office.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagefooterComponent } from './components/page-footer/pagefooter.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TokenInterceptor } from 'src/app/interceptors/token-interceptor';

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
         MatDialogModule,
         MatIconModule ,
         } from '@angular/material';
import { ContactspinnerComponent } from './components/contactspinner/contactspinner.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AboutOfficeComponent,
    ContactComponent,
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
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    ScrollingModule,
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
    ScrollingModule,
    MatDialogModule,
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
export class AppModule { }
