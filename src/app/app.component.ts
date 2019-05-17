import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../auth-config';
import openIdConfig from '../openid-config.json';
import openIdConfigKeys from '../openid-config.keys.json';
import { SwUpdate } from '@angular/service-worker';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
    title = 'OfficeApp';
    officeLogo = 'Office 365';
    seeFeautesText = 'Dashboard';
    loginButton = 'Login';
    logoutButton = 'Logout';

    srcUrlFB = '../../../../assets/images/fb.png';
    srcUrlInstagram = '../../../../assets/images/instagram.png';
    srcUrlTwitter = '../../../../assets/images/twitter.png';
    icon = '../../../../assets/images/icon.png';

    constructor(
        private oauthService: OAuthService,
        private route: ActivatedRoute,
        private router: Router,
        private swUpdate: SwUpdate) {
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

        this.oauthService.loadDiscoveryDocumentAndTryLogin({
            onTokenReceived: (info) => {
                router.navigate([info.state]);
            }
        });
    }

    public login(additionalState: string): void {
        this.oauthService.initImplicitFlow(additionalState);

    }

    public logOut(): void {
        this.oauthService.logOut();
    }

    public get name(): void {
        const claims = this.oauthService.getIdentityClaims();

        if (!claims) {
            return null;
        }

        return (claims as any).name;
    }
    ngAfterViewInit() {
        if (this.swUpdate.isEnabled) {
          this.swUpdate.available
            .subscribe(() => {
              this.swUpdate
                .activateUpdate()
                .then(() => {
                  window.location.reload();
                });
            });
        }
      }
}


