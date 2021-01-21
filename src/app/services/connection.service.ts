import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService implements OnInit {

  baseUrl: string = "https://localhost:44383/api/country/";
  countryData$: Observable<Country>;
  countryData: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  getData (){
    return this.http.get<Country>(this.baseUrl);
  }

  loadCountryCache() {
    this.countryData$ = this.getData();
    this.countryData$
    .subscribe(
      data => {
      this.countryData = data
      },
      error => alert('An error has occured please refresh the page.'));
  }
}
