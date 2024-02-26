import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPractComponent } from './extra-pract.component';

describe('ExtraPractComponent', () => {
  let component: ExtraPractComponent;
  let fixture: ComponentFixture<ExtraPractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraPractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraPractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
