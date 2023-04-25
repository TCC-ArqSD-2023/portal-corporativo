import { TestBed } from '@angular/core/testing';

import { TipoExameService } from './tipo-exame.service';

describe('TipoExameService', () => {
  let service: TipoExameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoExameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
