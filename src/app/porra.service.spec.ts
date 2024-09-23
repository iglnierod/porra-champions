import { TestBed } from '@angular/core/testing';

import { PorraService } from './porra.service';

describe('PorraService', () => {
  let service: PorraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
