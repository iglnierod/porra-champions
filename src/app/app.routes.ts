import { Routes } from '@angular/router';
import { NewMatchFormComponent } from './new-match-form/new-match-form.component';
import { TablaPuntosComponent } from './tabla-puntos/tabla-puntos.component';
import { AppComponent } from './app.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'match', component: NewMatchFormComponent },
  { path: 'predicciones', component: PredictionsComponent },
  { path: '**', redirectTo: '' },
];
