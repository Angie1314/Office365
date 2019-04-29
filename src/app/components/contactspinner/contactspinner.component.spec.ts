import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactspinnerComponent } from './contactspinner.component';

describe('ContactspinnerComponent', () => {
  let component: ContactspinnerComponent;
  let fixture: ComponentFixture<ContactspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
