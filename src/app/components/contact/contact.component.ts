import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { ContactService } from 'src/app/services/contact.service';
import { mergeMap, map, scan, tap, debounceTime, bufferCount, filter, startWith, max } from 'rxjs/operators';
import { Contact } from 'src/app/models/contact';
import { ODataResponse } from 'src/app/models/odata-response';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  icon = '../../../../assets/images/icon.png';
  settings = '../../../../assets/images/settings.png';
  help = '../../../../assets/images/help.png';
  avatar = '../../../../assets/images/avatar.png';
  search = '../../../../assets/images/search.png';

  settingsText = 'Settings';
  helpText = 'Help';
  signupText = 'Sign up';
  mailboxText = 'Mail Box';
  calendarText = 'Calendar';
  officeLogo = 'Office 365';

  contact: Contact[] = [];
  contacts: Observable<Contact[]>;

  private pageSize = 100;
  loading$ = new BehaviorSubject<boolean>(true);

  next$ = new BehaviorSubject<{ nextPosition: number, nextLink: string }>({ nextPosition: 1, nextLink: null });
  infinate$: Observable<{ nextLink: string, data: Contact[] }>;

  color = 'primary';
  mode = 'indeterminate';
  showSpinner = true;
  dataSource = new MatTableDataSource<Contact>();

  constructor(private contactService: ContactService) { }
  ngOnInit() {
    const nextForwardOnly$ = this.next$.pipe(
      debounceTime(200),
      scan<{ nextPosition: number, nextLink: string }, { max: number, value: { nextPosition: number, nextLink: string } }>(
        (accu, x) => ({ max: x.nextPosition > accu.max ? x.nextPosition : accu.max, value: x }),
        ({ max: 0, value: { nextLink: null, nextPosition: 0 } })
      ),
      filter(x => x.value.nextPosition >= x.max),
      map(x => x.value)
    );

    this.infinate$ = nextForwardOnly$.pipe(
      tap(() => this.loading$.next(true)),
      mergeMap(x => x.nextLink ? this.contactService.getNextUsers(x.nextLink) : this.contactService.getUsers(this.pageSize)),
      tap(x => console.log(x)),
      map<ODataResponse<Contact[]>, { nextLink: string, data: Contact[] }>(x => ({ nextLink: x['@odata.nextLink'], data: x.value })),
      scan((acc, resp) => ({ nextLink: resp.nextLink, data: [ ...acc.data, ...resp.data ]}), { nextLink: null, data: []}),
      tap(() => this.loading$.next(false))
    );
  }

  loadNextUsers(nextPosition: number, nextLink: string) {
    if (nextLink) {
      this.next$.next({ nextPosition, nextLink });
    }
  }
  //   this.contactService.getContact()
  //    .subscribe(x => { this.contact = x ; });
  //   this.contacts
  //    .subscribe(() => this.showSpinner = false);
  // }

}


