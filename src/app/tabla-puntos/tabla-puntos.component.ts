import { Component, OnInit } from '@angular/core';
import { PorraService } from '../porra.service';
import { RankingService } from '../services/ranking/ranking.service';

@Component({
  selector: 'app-tabla-puntos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-puntos.component.html',
  styleUrl: './tabla-puntos.component.css',
})
export class TablaPuntosComponent implements OnInit {
  // puntos: any[] = [];

  // constructor(private porraService: PorraService) {}

  // ngOnInit() {
  //   this.puntos = this.porraService.getPuntos();
  //   console.log(this.puntos);
  // }

  ranking: any[] = [];
  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
    this.rankingService.getRanking().subscribe((data: any[]) => {
      this.ranking = data.sort((a, b) => b.points - a.points);
    });
  }
}
