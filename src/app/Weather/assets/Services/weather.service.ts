import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { weather } from '../Model/weather';
import { BehaviorSubject, mergeMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  url:string = "http://api.weatherapi.com/v1/forecast.json?key=856473561c9744d6a30195705250904&q=Karachi&days=8"
  weatherCity = new BehaviorSubject<string>('Karachi')
  http = inject(HttpClient)
  currentWeather: weather = {}

  // getWeather(){
  //   return this.http.get<weather>(this.url)
  // }

  getWeather(){
  return this.weatherCity.pipe(
      mergeMap(value=> this.http.get<weather>(`http://api.weatherapi.com/v1/forecast.json?key=856473561c9744d6a30195705250904&q=${value}&days=8`))
    )
  }
}
