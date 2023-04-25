import { TestBed } from '@angular/core/testing';

import { ConveniadoService } from './conveniado.service';

describe('ConveniadoService', () => {
  let service: ConveniadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConveniadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
