import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService implements OnInit {

  baseUrl: string = "https://localhost:5001/api/country";
  countryData$: Observable<Country[]>;
  countryData: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  getData() {
    return this.http.get<Country[]>(this.baseUrl);
  }

  getCountryData(country: any): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/${country}`);
  }

}
