import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarspinnerComponent } from './calendarspinner.component';

describe('CalendarspinnerComponent', () => {
  let component: CalendarspinnerComponent;
  let fixture: ComponentFixture<CalendarspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarspinnerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
