import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCardGridComponent } from './song-card-grid.component';

describe('SongCardGridComponent', () => {
  let component: SongCardGridComponent;
  let fixture: ComponentFixture<SongCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongCardGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
