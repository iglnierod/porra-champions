import { Component } from '@angular/core';
import { PredictionService } from '../services/prediction/prediction.service';

@Component({
  selector: 'app-predictions',
  standalone: true,
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css'],
})
export class PredictionsComponent {
  predictions: any[] = [];

  constructor(private predictionService: PredictionService) {}

  ngOnInit(): void {
    this.predictionService.getPredictions().subscribe((data: any[]) => {
      this.predictions = data.map((predictionGroup) => {
        // Para cada predicción, calculamos la clase correspondiente
        predictionGroup.predictions.forEach(
          (prediction: {
            goalsLocalPrediction: number;
            goalsAwayPrediction: number;
            class: string;
          }) => {
            const actualLocalGoals = predictionGroup.match.localGoals;
            const actualAwayGoals = predictionGroup.match.awayGoals;
            const predictedLocalGoals = prediction.goalsLocalPrediction;
            const predictedAwayGoals = prediction.goalsAwayPrediction;

            // Obtener el ganador real y el ganador de la predicción
            const actualWinner = this.getWinner(
              actualLocalGoals,
              actualAwayGoals
            );
            const predictedWinner = this.getWinner(
              predictedLocalGoals,
              predictedAwayGoals
            );

            // Asignar clases según las condiciones
            if (
              predictedLocalGoals === actualLocalGoals &&
              predictedAwayGoals === actualAwayGoals
            ) {
              prediction.class = 'prediction goat'; // Acierta exacto el resultado
            } else if (predictedWinner === actualWinner) {
              prediction.class = 'prediction winner'; // Acierta el ganador (pero no el resultado exacto)
            } else {
              prediction.class = 'prediction loser'; // No acierta ni el ganador
            }
          }
        );
        return predictionGroup; // Retornamos el grupo de predicciones modificado
      });
    });
  }

  // Función que determina el ganador del partido
  getWinner(team1Score: number, team2Score: number) {
    if (team1Score > team2Score) {
      return 0; // Gana el equipo local
    } else if (team2Score > team1Score) {
      return 2; // Gana el equipo visitante
    } else {
      return 1; // Empate
    }
  }
}
