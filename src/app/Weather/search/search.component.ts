import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { WeatherService } from '../assets/Services/weather.service';
import { LocationService } from '../assets/Services/location.service';
import { WeatherModule } from '../weather/weather.module';
import { MaterialsModule } from '../../materials/materials.module';
import { delay, distinctUntilChanged } from 'rxjs';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'location-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @ViewChild('loc') locationInput!: ElementRef<HTMLInputElement>;
  @Input() location :string= ''
  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger!: MatAutocompleteTrigger;
  locationData:string =''
  weatherService = inject(WeatherService)
  locationService = inject(LocationService)
  cities:string[]=[]
  city:string = ''
  selected!: string;

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
    if(value.trim() !== ''){
        this.autocompleteTrigger.closePanel();
        this.locationInput.nativeElement.blur()
      
      this.weatherService.weatherCity.next(value)
    }
    
   }

   log(e :any){
    console.log("hello")
   }

   search(e:any, input:any){
     if(e.key === "Enter"){
      this.setCity(input.value)
      input.blur()
    }
   }

   searchtext(e:any, input:any , value:string){
    console.log("hello")
    if(e.key === "Enter"){
      this.setCity(value)
      input.blur()
    }
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
    }
    
   }



}
