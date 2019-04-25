import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../auth-config';
import openIdConfig from '../openid-config.json';
import openIdConfigKeys from '../openid-config.keys.json';
import { ActivatedRoute } from '@angular/router';
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

    srcUrlFB: string;
    srcUrlInstagram: string;
    srcUrlTwitter: string;
    icon: string;
    settings: string;
    help: string;

    constructor(private oauthService: OAuthService, private route: ActivatedRoute) {

        this.srcUrlFB = "../../../../assets/images/fb.png";
        this.srcUrlInstagram = "../../../../assets/images/instagram.png";
        this.srcUrlTwitter = "../../../../assets/images/twitter.png";
        this.icon = "../../../../assets/images/icon.png";
        this.settings = "../../../../assets/images/settings.png";
        this.help = "../../../../assets/images/help.png";

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
    getLocation(): void {
        const id = +this.route.snapshot.paramMap.get('id');
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


