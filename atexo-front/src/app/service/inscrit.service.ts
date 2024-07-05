import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscritService {
  private apiUrl = 'http://localhost:8090/api/inscrits';

  constructor(private http: HttpClient) { }

  creerInscrit(inscrit: any, criteres: any): Observable<string> {
    const payload = { inscrit, criteres };
    return this.http.post<string>(this.apiUrl, payload);
  }
}