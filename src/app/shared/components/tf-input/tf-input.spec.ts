import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFInput } from './tf-input';

describe('TFInput', () => {
  let component: TFInput;
  let fixture: ComponentFixture<TFInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TFInput],
    }).compileComponents();

    fixture = TestBed.createComponent(TFInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
