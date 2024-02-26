import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridPracComponent } from './ag-grid-prac.component';

describe('AgGridPracComponent', () => {
  let component: AgGridPracComponent;
  let fixture: ComponentFixture<AgGridPracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridPracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
