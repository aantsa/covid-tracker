import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDataComponent } from './country-data/country-data.component';
import { GeoMapComponent } from './geo-map/geo-map.component';

const routes: Routes = [
  {path: 'country-data/:country', component: CountryDataComponent},
  {path: 'country-data', component: CountryDataComponent},
  {path: '', redirectTo: 'geo-map', pathMatch: 'full'},
  {path: 'geo-map', component: GeoMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
