import { TestBed } from '@angular/core/testing';

import { ContactAddService } from './addcontact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddcontactService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: ContactAddService = TestBed.get(ContactAddService);
    expect(service).toBeTruthy();
  });
});
