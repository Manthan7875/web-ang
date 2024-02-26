import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerinvoiceComponent } from './retailerinvoice.component';

describe('RetailerinvoiceComponent', () => {
  let component: RetailerinvoiceComponent;
  let fixture: ComponentFixture<RetailerinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
