import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C0Component } from './c0.component';

describe('C0Component', () => {
  let component: C0Component;
  let fixture: ComponentFixture<C0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [C0Component]
    });
    fixture = TestBed.createComponent(C0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
