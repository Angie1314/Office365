import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../auth-config';
import openIdConfig from '../openid-config.json';
import openIdConfigKeys from '../openid-config.keys.json';
import { Photo } from 'src/ models/photo';
import { Observable } from 'rxjs';
import { PhotoService } from 'src/services/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent {
    title = 'OfficeApp';
    officeLogo = 'Welcome to Office 365';
    arrowDown = 'keyboard_arrow_down';
    seeFeautesText = 'Dashboard';
    loginButton = 'Login';
    logoutButton = 'Logout';

    srcUrlFB: string;
    srcUrlInstagram: string;
    srcUrlTwitter: string;
    icon: string;
    settings: string;
    help: string;
    avatarImg: string;

    photo: Observable<Photo>;

    private fragment: string;

    constructor(private oauthService: OAuthService, private photoservice: PhotoService, private route: ActivatedRoute) {

      

        this.srcUrlFB = "../../../../assets/images/fb.png";
        this.srcUrlInstagram = "../../../../assets/images/instagram.png";
        this.srcUrlTwitter = "../../../../assets/images/twitter.png";
        this.icon = "../../../../assets/images/icon.png";
        this.settings = "../../../../assets/images/settings.png";
        this.help = "../../../../assets/images/help.png";
        this.avatarImg = "../../../../assets/images/a2.jpg";
        

        const config = openIdConfig as any;
        this.photo = this.photoservice.getPhoto();


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

      onScroll(){
        let logout = document.querySelector("#logout");
        let dashboard= document.querySelector('#dashboard');
        let contact = document.querySelector('#contact');
        // let choice=document.querySelector('#choice').value;

        if (logout){
            logout.scrollIntoView();
        }
        else if(dashboard){
            dashboard.scrollIntoView();
        }
        else if(contact){
            contact.scrollIntoView();
        }
        // switch(choice) { 
        //     case logout: { 
        //         logout.scrollIntoView();
        //        break; 
        //     } 
        //     case dashboard: { 
        //         dashboard.scrollIntoView();
        //        break; 
        //     } 
        //     default: { 
        //        //statements; 
        //        break; 
        //     } 
        //  } 

    }

}


