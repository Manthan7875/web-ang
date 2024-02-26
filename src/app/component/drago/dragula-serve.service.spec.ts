import { TestBed } from '@angular/core/testing';

import { DragulaServeService } from './dragula-serve.service';

describe('DragulaServeService', () => {
  let service: DragulaServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragulaServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
