import { TestBed } from '@angular/core/testing';

import { RetailerinvoiceService } from './retailerinvoice.service';

describe('RetailerinvoiceService', () => {
  let service: RetailerinvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerinvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
