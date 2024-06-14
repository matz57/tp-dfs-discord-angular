import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:3000/message';

  constructor(private http: HttpClient) {}

  createMessage(messageData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, messageData);
  }

  getMessagesBySalon(salonId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/salon/${salonId}`);
  }
}