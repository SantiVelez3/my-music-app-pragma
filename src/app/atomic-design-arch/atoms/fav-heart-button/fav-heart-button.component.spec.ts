import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavHeartButtonComponent } from './fav-heart-button.component';

describe('FavHeartButtonComponent', () => {
  let component: FavHeartButtonComponent;
  let fixture: ComponentFixture<FavHeartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavHeartButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavHeartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
