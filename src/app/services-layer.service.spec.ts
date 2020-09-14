import { TestBed } from '@angular/core/testing';

import { ServicesLayerService } from './services-layer.service';

describe('ServicesLayerService', () => {
  let service: ServicesLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
