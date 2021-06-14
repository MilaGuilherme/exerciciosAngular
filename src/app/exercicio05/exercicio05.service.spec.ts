import { TestBed } from '@angular/core/testing';

import { CincoService } from './exercicio05.service';

describe('CincoService', () => {
  let service: CincoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CincoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
