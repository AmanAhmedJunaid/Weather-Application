import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { location } from '../Model/location';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  
  url:string="http://api.weatherapi.com/v1/search.json?key=856473561c9744d6a30195705250904&q="
  http = inject(HttpClient)
  
  getLocations(city:string){
    return this.http.get<location[]>(`${this.url}${city}`)
  }
  
}
