import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPuntosComponent } from './tabla-puntos.component';

describe('TablaPuntosComponent', () => {
  let component: TablaPuntosComponent;
  let fixture: ComponentFixture<TablaPuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPuntosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
