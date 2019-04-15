import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});
