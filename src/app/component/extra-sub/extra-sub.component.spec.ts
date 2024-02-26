import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSubComponent } from './extra-sub.component';

describe('ExtraSubComponent', () => {
  let component: ExtraSubComponent;
  let fixture: ComponentFixture<ExtraSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
