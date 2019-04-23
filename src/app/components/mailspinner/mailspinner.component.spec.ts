import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailspinnerComponent } from './mailspinner.component';

describe('MailspinnerComponent', () => {
  let component: MailspinnerComponent;
  let fixture: ComponentFixture<MailspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
