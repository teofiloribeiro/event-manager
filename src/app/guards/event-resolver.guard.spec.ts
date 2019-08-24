import { TestBed, async, inject } from '@angular/core/testing';

import { EventResolverGuard } from './event-resolver.guard';

describe('EventResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventResolverGuard]
    });
  });

  it('should ...', inject([EventResolverGuard], (guard: EventResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
