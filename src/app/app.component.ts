import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../auth-config';
import openIdConfig from '../openid-config.json';
import openIdConfigKeys from '../openid-config.keys.json';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'OfficeApp';
    officeLogo = 'Office 365';
    seeFeautesText = 'Dashboard';
    loginButton = 'Login';
    logoutButton = 'Logout';

    srcUrlFB = '../../../../assets/images/fb.png';
    srcUrlInstagram = '../../../../assets/images/instagram.png';
    srcUrlTwitter = '../../../../assets/images/twitter.png';
    icon = '../../../../assets/images/icon.png';

    constructor(private oauthService: OAuthService, private route: ActivatedRoute) {
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


