import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor(private http: HttpClient) {

   }

  getData() {
    return this.http.get('https://demo.medinet.cl/api/dashboard/productividad/?format=json');
  }

 
}
