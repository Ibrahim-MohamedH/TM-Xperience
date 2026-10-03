import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFButton } from './tf-button';

describe('TFButton', () => {
  let component: TFButton;
  let fixture: ComponentFixture<TFButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TFButton],
    }).compileComponents();

    fixture = TestBed.createComponent(TFButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
