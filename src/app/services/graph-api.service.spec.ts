import { TestBed } from '@angular/core/testing';

import { GraphApiService } from './graph-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('GraphApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: GraphApiService = TestBed.get(GraphApiService);
    expect(service).toBeTruthy();
  });
});
