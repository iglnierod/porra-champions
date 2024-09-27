import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionsComponent } from './predictions.component';

describe('PredictionsComponent', () => {
  let component: PredictionsComponent;
  let fixture: ComponentFixture<PredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 0 when team1 wins', () => {
    const result = component.getWinner(2, 1);
    expect(result).toBe(0);
  });

  it('should return 2 when team2 wins', () => {
    const result = component.getWinner(1, 3);
    expect(result).toBe(2);
  });

  it('should return 1 when it is a draw', () => {
    const result = component.getWinner(1, 1);
    expect(result).toBe(1);
  });
});
