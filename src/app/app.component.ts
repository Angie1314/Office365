import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'src/authConfig';
import openIdConfig from '../openid-config.json';
import openIdConfigKeys from '../openid-config.keys.json';

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
    const config = openIdConfig as any;

    Object.assign(authConfig, {
      loginUrl: config.authorization_endpoint,
      logoutUrl: config.end_session_endpoint,
      grantTypesSupported: config.grant_types_supported,
      issuer: config.issuer,
      tokenEndpoint: config.token_endpoint,
      userinfoEndpoint: config.userinfo_endpoint,
      jwksUri: config.jwks_uri,
      sessionCheckIFrameUrl: config.check_session_iframe,
      jwks: openIdConfigKeys
    });

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.tryLogin();
  }

  public login(): void {
    this.oauthService.initImplicitFlow();
  }

  public logOut() {
    this.oauthService.logOut();
  }

  public get name() {
    const claims = this.oauthService.getIdentityClaims();

    if (!claims) {
      return null;
    }

    return (claims as any).name;
  }
}


