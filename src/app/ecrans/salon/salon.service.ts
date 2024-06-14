import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalonService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  createSalon(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/salon`, data);
  }

  getSalonsByServeurId(serveurId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/salon/${serveurId}`);
  }

  getSalonById(salonId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/salon/${salonId}`);
  }
}