import { Routes } from '@angular/router';
import { NewMatchFormComponent } from './new-match-form/new-match-form.component';
import { TablaPuntosComponent } from './tabla-puntos/tabla-puntos.component';
import { AppComponent } from './app.component';
import { PredictionsComponent } from './predictions/predictions.component';

// export const routes: Routes = [
//   { path: '', component: TablaPuntosComponent }, // Define el componente que quieras para la ruta raíz
//   { path: 'match', component: NewMatchFormComponent },
//   { path: 'predicciones', component: PredictionsComponent },
// ];

export const routes: Routes = [
  { path: '', component: AppComponent }, // Define el componente que quieras para la ruta raíz
  { path: 'match', component: NewMatchFormComponent },
  { path: 'predicciones', component: PredictionsComponent },
];
