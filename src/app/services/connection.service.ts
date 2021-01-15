import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  baseUrl: string = "https://localhost:44383/api/country";

  constructor(private http: HttpClient) { }

  getData (){
    return this.http.get(this.baseUrl);
  }
}
