import { TestBed } from '@angular/core/testing';

import { MoviesIdService } from './movies.service';

describe('MoviesIdService', () => {
  let service: MoviesIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
