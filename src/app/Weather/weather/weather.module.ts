import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { SearchComponent } from '../search/search.component';
import { CityWeatherComponent } from '../city-weather/city-weather.component';
import { MaterialsModule } from '../../materials/materials.module';

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    CityWeatherComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule

  ]
})
export class WeatherModule { }
