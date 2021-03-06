import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'src/auth-config';
import openIdConfig from 'src/openid-config.json';
import openIdConfigKeys from 'src/openid-config.keys.json';
import { ProfileApiService } from 'src/app/services/profile-api.service';
@Injectable()

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    title = 'OfficeApp';
    officeLogo = 'Office 365';
    seeFeautesText = 'Dashboard';
    aboutOfficeText = 'About Office';
    loginButton = 'Login';
    logoutButton = 'Logout';
    avatarImg = '../../../../assets/images/avatar2.png';
    mail: string;
    photoUrl: string;

    constructor(private oauthService: OAuthService, private router: Router, private graphApiService: ProfileApiService) {
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

    public login() {
        this.oauthService.initImplicitFlow();
        this.router.navigate(['/contacts']);
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
