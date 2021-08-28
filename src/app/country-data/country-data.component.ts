import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css']
})
export class CountryDataComponent implements OnInit {
  countryData$: Observable<Country>;
  countryData: any = [];
  myParam;
  array: Country[] = [];
  title = 'covid-tracker';
  headers = [  "Country",
  "Capital City",
  "Confirmed",
  "Deaths",
  "Life expectancy",
  "Population",
  ]

  constructor(private connectionService: ConnectionService, private activatedRoute: ActivatedRoute ){
    this.activatedRoute.params.subscribe((params: Params) => this.myParam = params['country']);
  }
  ngOnInit(): void {
    this.connectionService.getCountryData(this.myParam).subscribe(data => {
      this.countryData = data.All;
    })
  }
}
