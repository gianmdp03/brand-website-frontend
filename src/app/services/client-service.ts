import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ClientRequest } from '../models/client-request';
import { Observable } from 'rxjs';
import { ClientDet } from '../models/client-det';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly apiUrl = 'http://localhost:8080/api/clients';
  private http = inject(HttpClient);

  addClient(client: ClientRequest): Observable<ClientDet> {
    return this.http.post<ClientDet>(this.apiUrl, client);
  }

  getClientById(id: number): Observable<ClientDet> {
    return this.http.get<ClientDet>(`${this.apiUrl}/${id}`);
  }

  listClients(): Observable<ClientDet[]> {
    return this.http.get<ClientDet[]>(this.apiUrl);
  }

  updateClient(id: number, client: Partial<ClientRequest>): Observable<ClientDet> {
    return this.http.patch<ClientDet>(`${this.apiUrl}/${id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
