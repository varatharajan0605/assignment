import { TestBed } from '@angular/core/testing';

import { RestEndpointService } from './rest-endpoint.service';

describe('RestEndpointService', () => {
  let service: RestEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
