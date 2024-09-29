import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  private apiUrl = `${environment.apiUrl}/predictions`;

  constructor(private http: HttpClient) {}

  getPredictions(): Observable<any[]> {
    console.log(this.apiUrl);
    return this.http.get<any[]>(this.apiUrl);
  }
}
