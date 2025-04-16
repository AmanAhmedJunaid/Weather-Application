import { Component, inject, Input } from '@angular/core';
import { WeatherService } from '../assets/Services/weather.service';
import { LocationService } from '../assets/Services/location.service';
import { WeatherModule } from '../weather/weather.module';
import { MaterialsModule } from '../../materials/materials.module';
import { delay, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'location-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() location :string= ''
  locationData:string =''
  weatherService = inject(WeatherService)
  locationService = inject(LocationService)
  cities:string[]=[]
  city:string = ''


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

   getCities(){
    if(this.city !== ''){
      this.locationService.getLocations(this.city).pipe(
        delay(300),
        distinctUntilChanged()
      ).subscribe(data=>{
        this.cities = []
        for (let i = 0; i < data.length; i++) {
          this.cities.push(`${data[i].name}, ${data[i].region}, ${data[i].country}`)
        }
       })
       console.log(this.cities)
    }
    
   }



}
