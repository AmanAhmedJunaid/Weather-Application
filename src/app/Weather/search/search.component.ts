import { Component, inject, Input } from '@angular/core';
import { WeatherService } from '../assets/Services/weather.service';

@Component({
  selector: 'location-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() location :string= ''
  locationData:string =''
  weatherService = inject(WeatherService)





 clearValue() {
   this.locationData = this.location
   this.location = ''
  }
  checkValue(value:string) {
    if (value == '') {
       this.location = this.locationData
      }
      else{
        this.location = value
      }
   }


   setCity(value:string){
    this.weatherService.weatherCity.next(value)
   }


}
