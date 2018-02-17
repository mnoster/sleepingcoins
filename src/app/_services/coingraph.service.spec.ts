import { TestBed, inject } from '@angular/core/testing';

import { CoingraphService } from './coingraph.service';

describe('CoingraphService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoingraphService]
    });
  });

  it('should be created', inject([CoingraphService], (service: CoingraphService) => {
    expect(service).toBeTruthy();
  }));
});
