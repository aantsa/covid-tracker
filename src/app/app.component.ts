import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './models/country';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular 10";
}