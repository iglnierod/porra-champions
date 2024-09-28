import { Component } from '@angular/core';
import { PredictionsComponent } from '../predictions/predictions.component';
import { TablaPuntosComponent } from '../tabla-puntos/tabla-puntos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PredictionsComponent, TablaPuntosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
