import { Injectable } from '@angular/core';

const emailOffice365Url= 'https://graph.microsoft.com/v1.0/me/messages?$filter=importance';
const clientKey = '8faad26f-980e-441d-9f63-f3b50b071d20';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }
  static getGroups(country) {
    return this.ajax('GET', `${emailOffice365Url}eq 'high'${clientKey}`);
}

static ajax(method, url) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const json = JSON.parse(xhr.response);
                resolve(json);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        };

        xhr.onerror = () => {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };
        
        xhr.send();
    });

}
};
