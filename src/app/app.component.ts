import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'src/authConfig';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./theme.scss']
})

export class AppComponent {

  title = 'OfficeUse365';
  officeLogo = 'Welcome to Office 365';
  arrowDown = 'keyboard_arrow_down';
  seeFeautesText = 'See Features';
  loginButton = 'Login';


  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  public login() {
    this.oauthService.initImplicitFlow();
  }
}
