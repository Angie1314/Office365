import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { mergeMap, map, scan, tap, debounceTime, filter } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { ODataResponse } from 'src/app/models/odata-response';
import { Search } from 'src/app/models/search-response';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

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

  loadingSpinner$ = new BehaviorSubject<boolean>(true);
  private pageArea = 100;

  searchStr: string;
  searchRes: Search[];

  nextItem$ = new BehaviorSubject<{ nextPosition: number, nextLink: string }>({ nextPosition: 1, nextLink: null });
  infinate$: Observable<{ nextLink: string, data: Contact[] }>;

  color = 'primary';
  mode = 'indeterminate';
  showSpinner = true;
  dataSource = new MatTableDataSource<Contact>();

  constructor(private contactService: ContactService) { }

  searchContact() {
    this.contactService.searchByName(this.searchStr)
      .subscribe(results => {
        this.searchRes = results;
      });
  }

  ngOnInit() {
    const nextForwardOnly$ = this.nextItem$.pipe(
      debounceTime(200),
      scan<{ nextPosition: number, nextLink: string }, { maximum: number, value: { nextPosition: number, nextLink: string } }>(
        (accu, x) => ({ maximum: x.nextPosition > accu.maximum ? x.nextPosition : accu.maximum, value: x }),
        ({ maximum: 0, value: { nextLink: null, nextPosition: 0 } })
      ),
      filter(x => x.value.nextPosition >= x.maximum),
      map(x => x.value)
    );

    this.infinate$ = nextForwardOnly$.pipe(
      tap(() => this.loadingSpinner$.next(true)),
      mergeMap(x => x.nextLink ? this.contactService.getNextUsers(x.nextLink) : this.contactService.getUsers(this.pageArea)),
      map<ODataResponse<Contact[]>, { nextLink: string, data: Contact[] }>(x => ({ nextLink: x['@odata.nextLink'], data: x.value })),
      scan((acc, resp) => ({ nextLink: resp.nextLink, data: [...acc.data, ...resp.data] }), { nextLink: null, data: [] }),
      tap(() => this.loadingSpinner$.next(false))
    );
  }

  loadNextUsers(nextPosition: number, nextLink: string) {
    if (nextLink) {
      this.nextItem$.next({ nextPosition, nextLink });
    }
  }
}


