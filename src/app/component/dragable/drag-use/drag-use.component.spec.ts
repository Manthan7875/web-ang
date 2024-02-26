import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragUseComponent } from './drag-use.component';

describe('DragUseComponent', () => {
  let component: DragUseComponent;
  let fixture: ComponentFixture<DragUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
