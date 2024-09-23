import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaPuntosComponent } from './tabla-puntos/tabla-puntos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaPuntosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'porra-champions';
}
