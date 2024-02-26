import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeTouchComponent } from './size-touch.component';

describe('SizeTouchComponent', () => {
  let component: SizeTouchComponent;
  let fixture: ComponentFixture<SizeTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeTouchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
