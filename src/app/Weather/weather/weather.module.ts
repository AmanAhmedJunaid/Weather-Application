import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { SearchComponent } from '../search/search.component';
import { CityWeatherComponent } from '../city-weather/city-weather.component';
import { MaterialsModule } from '../../materials/materials.module';
import { SwiperModule } from 'swiper/types';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    CityWeatherComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    DatePipe,
    
    

  ],
  exports:[],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WeatherModule { }
