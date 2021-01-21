import { Component, OnInit } from '@angular/core';
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
  countryData: any;
  array: Country[] = [];
  title = 'covid-tracker';
  headers = [  "Country",
  "Capital City",
  "Population",
  "SqKmArea",
  "Life Expectancy",
  "Elevation in Meters",
  "Continent",
  "Abbreviation",
  "Location",
  "Iso"
  ]

  constructor(private connectionService: ConnectionService){
    /*if(!this.connectionService.countryData){
      this.connectionService.loadCountryCache()
      this.connectionService.countryData$.subscribe(
        data => {
          this.countryData = data;
          console.log(data)
        },
        
      error => alert('An error has occured please refresh the page.'));
    } else {
      this.countryData = this.connectionService.countryData;
    }*/
  }
  ngOnInit(): void {
    
  }

  getUsers(){
    this.connectionService.getData().subscribe(data => {
      console.log(data);
      this.countryData = data;
    })
  }
}
