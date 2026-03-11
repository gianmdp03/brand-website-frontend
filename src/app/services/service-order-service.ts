import { inject, Injectable } from '@angular/core';
import { ServiceOrderDet } from '../models/service-order-det';
import { Observable } from 'rxjs';
import { ServiceOrderRequest } from '../models/service-order-request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceOrderService {
  private readonly apiUrl = 'http://localhost:8080/api/service-orders';
  private http = inject(HttpClient);

  addServiceOrder(serviceOrder: ServiceOrderRequest): Observable<ServiceOrderDet> {
    return this.http.post<ServiceOrderDet>(this.apiUrl, serviceOrder);
  }

  getServiceOrderById(id: number): Observable<ServiceOrderDet> {
    return this.http.get<ServiceOrderDet>(`${this.apiUrl}/${id}`);
  }

  listServiceOrders(): Observable<ServiceOrderDet[]> {
    return this.http.get<ServiceOrderDet[]>(this.apiUrl);
  }

  updateServiceOrder(id: number, serviceOrder: Partial<ServiceOrderRequest>): Observable<ServiceOrderDet> {
    return this.http.patch<ServiceOrderDet>(`${this.apiUrl}/${id}`, serviceOrder);
  }

  deleteServiceOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
