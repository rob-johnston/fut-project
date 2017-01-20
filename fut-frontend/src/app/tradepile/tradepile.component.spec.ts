/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TradepileComponent } from './tradepile.component';

describe('TradepileComponent', () => {
  let component: TradepileComponent;
  let fixture: ComponentFixture<TradepileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradepileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradepileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
