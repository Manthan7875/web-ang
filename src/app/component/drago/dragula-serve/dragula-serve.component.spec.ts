import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragulaServeComponent } from './dragula-serve.component';

describe('DragulaServeComponent', () => {
  let component: DragulaServeComponent;
  let fixture: ComponentFixture<DragulaServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragulaServeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragulaServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
