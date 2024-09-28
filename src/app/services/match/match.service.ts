import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private apiUrl = `${environment.apiUrl}/matches`;
  constructor(private http: HttpClient) {}

  createMatch(match: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, match);
  }

  getAllMatches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
