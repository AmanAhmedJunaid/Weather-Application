import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { weather } from '../Model/weather';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  url:string = "http://api.weatherapi.com/v1/forecast.json?key=856473561c9744d6a30195705250904&q=Karachi&days=7"

  http = inject(HttpClient)

  getWeather(){
    return this.http.get<weather>(this.url)
  }
}
