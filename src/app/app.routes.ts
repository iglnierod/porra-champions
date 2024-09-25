import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewMatchFormComponent } from './new-match-form/new-match-form.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'match', component: NewMatchFormComponent },
  { path: '**', redirectTo: '' },
];
