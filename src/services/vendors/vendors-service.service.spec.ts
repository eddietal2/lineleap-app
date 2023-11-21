import { TestBed } from '@angular/core/testing';

import { VendorsServiceService } from './vendors-service.service';

describe('VendorsServiceService', () => {
  let service: VendorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
