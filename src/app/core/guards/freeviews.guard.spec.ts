import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FreeviewsGuard } from './freeviews.guard';

describe('FreeviewsGuard', () => {
  let guard: FreeviewsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[],
      imports:[
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(FreeviewsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
