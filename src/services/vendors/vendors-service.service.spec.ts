import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 

import { VendorsServiceService } from './vendors-service.service';

describe('VendorsServiceService', () => {
  let service: VendorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule]
    });
    service = TestBed.inject(VendorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getVendors() - should be able to get a list of vendors per the users location', () => {
    // expect(service).toBeFalsy();
  });
});
