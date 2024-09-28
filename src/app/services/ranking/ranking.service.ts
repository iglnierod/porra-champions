import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private apiUrl = 'https://porra-champions-backend.onrender.com/api/users';
  constructor(private http: HttpClient) {}

  getRanking(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
