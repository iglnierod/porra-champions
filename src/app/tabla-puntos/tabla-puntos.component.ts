import { Component, OnInit } from '@angular/core';
import { PorraService } from '../porra.service';

@Component({
  selector: 'app-tabla-puntos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-puntos.component.html',
  styleUrl: './tabla-puntos.component.css',
})
export class TablaPuntosComponent implements OnInit {
  puntos: any[] = [];

  constructor(private porraService: PorraService) {}

  ngOnInit() {
    this.puntos = this.porraService.getPuntos();
    console.log(this.puntos);
  }
}
