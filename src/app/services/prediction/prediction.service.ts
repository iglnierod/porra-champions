import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  private apiUrl =
    'http://https://porra-champions-backend.onrender.com/api/predictions';

  constructor(private http: HttpClient) {}

  getPredictions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
