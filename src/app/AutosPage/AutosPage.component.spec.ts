/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutosPageComponent } from './AutosPage.component';

describe('AutosPageComponent', () => {
  let component: AutosPageComponent;
  let fixture: ComponentFixture<AutosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
