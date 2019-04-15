import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingComponent } from './setting.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
