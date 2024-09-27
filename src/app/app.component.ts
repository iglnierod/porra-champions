import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaPuntosComponent } from './tabla-puntos/tabla-puntos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PredictionsComponent } from './predictions/predictions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaPuntosComponent, PredictionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'porra-champions';
}
