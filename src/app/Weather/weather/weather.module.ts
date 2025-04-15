import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { SearchComponent } from '../search/search.component';
import { CityWeatherComponent } from '../city-weather/city-weather.component';
import { MaterialsModule } from '../../materials/materials.module';
import { SwiperModule } from 'swiper/types';


@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    CityWeatherComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    

  ],
  exports:[],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WeatherModule { }
