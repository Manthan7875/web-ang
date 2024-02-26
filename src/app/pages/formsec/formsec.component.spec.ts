import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsecComponent } from './formsec.component';

describe('FormsecComponent', () => {
  let component: FormsecComponent;
  let fixture: ComponentFixture<FormsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
