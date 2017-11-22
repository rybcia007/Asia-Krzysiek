/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HoneymoonComponent } from './honeymoon.component';

describe('HoneymoonComponent', () => {
  let component: HoneymoonComponent;
  let fixture: ComponentFixture<HoneymoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneymoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneymoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
