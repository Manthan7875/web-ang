import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragInsideComponent } from './drag-inside.component';

describe('DragInsideComponent', () => {
  let component: DragInsideComponent;
  let fixture: ComponentFixture<DragInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
