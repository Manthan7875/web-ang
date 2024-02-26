import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pop3Component } from './pop3.component';

describe('Pop3Component', () => {
  let component: Pop3Component;
  let fixture: ComponentFixture<Pop3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pop3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
