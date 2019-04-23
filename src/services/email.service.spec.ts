import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('EmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: EmailService = TestBed.get(EmailService);
    expect(service).toBeTruthy();
  });
});
