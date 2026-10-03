import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFCard } from './tf-card';

describe('TFCard', () => {
  let component: TFCard;
  let fixture: ComponentFixture<TFCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TFCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TFCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
