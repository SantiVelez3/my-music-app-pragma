import { TestBed } from '@angular/core/testing';

import { FreeviewsGuard } from './freeviews.guard';

describe('FreeviewsGuard', () => {
  let guard: FreeviewsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FreeviewsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
