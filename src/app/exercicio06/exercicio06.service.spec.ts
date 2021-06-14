import { TestBed } from '@angular/core/testing';

import { SeisService } from './exercicio06.service';

describe('SeisService', () => {
  let service: SeisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
