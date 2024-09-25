import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private API_SERVER = 'http://localhost:1906/api/teams';
  constructor(private httpClient: HttpClient) {}

  public getAllTeams(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
}
