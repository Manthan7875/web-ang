import { TestBed } from '@angular/core/testing';

import { DragUseService } from './drag-use.service';

describe('DragUseService', () => {
  let service: DragUseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragUseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
