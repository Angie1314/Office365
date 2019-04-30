import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { NewEventComponent } from './new-event.component';
import { ProfileApiService } from 'src/app/services/profile-api.service';
import { CalendarEvent } from 'src/app/models/calendar-event';

class GraphApiServiceMock {
  createEvent(event: CalendarEvent): Observable<number> {
    return of(0);
  }
}

describe('NewEventComponent', () => {
  let component: NewEventComponent;
  let fixture: ComponentFixture<NewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventComponent, MatCardModule ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule
      ],
      providers: [ { provide: ProfileApiService, useClass: GraphApiServiceMock } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should say Angular workshop!', () => {
    expect(component.event.subject).toEqual('Angular workshop!');
  });

  it('should be a control', () => {
    expect(component.subject).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.eventForm.get('subject').setValue('');
    expect(component.eventForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.eventForm.get('subject').setValue('Angular workshop!');
    expect(component.eventForm.valid).toBeTruthy();
  });

  it('can submit', () => {
    component.onSubmit();
  });
});

