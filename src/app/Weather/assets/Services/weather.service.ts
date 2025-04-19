import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { weather } from '../Model/weather';
import { BehaviorSubject, catchError, throwError , map, mergeMap, of} from 'rxjs';
import { ip } from '../Model/ip';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  ipurl:string='//geolocation-db.com/json/'
  url:string = "//api.weatherapi.com/v1/forecast.json?key=856473561c9744d6a30195705250904&q=Karachi&days=8"
  weatherCity = new BehaviorSubject<string>('')
  http = inject(HttpClient)
  currentWeather: weather = {}
  ipFetched = new BehaviorSubject<boolean>(false)
  notFound:boolean=false
 getLocationViaIp(){
   this.ipFetched.subscribe(fet=>{
    if(fet == false){
      this.http.get<ip>('//geolocation-db.com/json/')
    .subscribe((res)=>{
      this.weatherCity.next(res.IPv4)
      this.ipFetched.next(true)
  },
  (err)=>{
    this.weatherCity.next("London")
    this.ipFetched.next(true)
  })}
   })
  
 }



  getWeather(){
    this.notFound = true
  return this.weatherCity.pipe(
      mergeMap(value=> this.http.get<weather>(`//api.weatherapi.com/v1/forecast.json?key=856473561c9744d6a30195705250904&q=${value}&days=8`))
    )
  }
}
