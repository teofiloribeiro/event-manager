import { TestBed } from '@angular/core/testing';

import { TokenInteceptorService } from './token-inteceptor.service';

describe('TokenInteceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenInteceptorService = TestBed.get(TokenInteceptorService);
    expect(service).toBeTruthy();
  });
});
