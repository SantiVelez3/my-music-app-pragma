import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TracksService } from './tracks.service';

describe('TracksService', () => {
  let service: TracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        HttpClient,
        HttpHandler
        ],
        imports:[
          RouterTestingModule
        ]
    });
    service = TestBed.inject(TracksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
