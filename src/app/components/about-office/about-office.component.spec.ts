import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOfficeComponent } from './about-office.component';

describe('AboutOfficeComponent', () => {
  let component: AboutOfficeComponent;
  let fixture: ComponentFixture<AboutOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutOfficeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
