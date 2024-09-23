import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PorraService {
  private partidos = [
    {
      equipoLocal: 'Real Madrid',
      equipoVisitante: 'Barcelona',
      resultado: '2-1',
    },
    { equipoLocal: 'Liverpool', equipoVisitante: 'PSG', resultado: '1-1' },
  ];

  private puntos = [
    {
      nombre: 'Crampy',
      puntos: 9,
      imagenUrl:
        'https://cdn.discordapp.com/avatars/598575140451778614/a_7b44364f1263e3e0dda092a06b0c6847?size=1024',
    },
    {
      nombre: 'Man1a',
      puntos: 4,
      imagenUrl:
        'https://cdn.discordapp.com/avatars/546473079816192031/11a05c59e2f18c541e8d667f8a673f1c?size=1024',
    },
    {
      nombre: 'Iker',
      puntos: 5,
      imagenUrl:
        'https://cdn.discordapp.com/avatars/468839977208512512/13778b4d3d95a3f056c3da80fe14e293?size=1024',
    },
    {
      nombre: 'Alma',
      puntos: 6,
      imagenUrl:
        'https://cdn.discordapp.com/avatars/735105833112830022/fec2fed592df27512186b8260094d22b?size=1024',
    },
  ];

  getPartidos() {
    return this.partidos;
  }

  getPuntos() {
    return this.puntos.sort((a, b) => b.puntos - a.puntos);
  }
}
