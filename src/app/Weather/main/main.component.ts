import { Component } from '@angular/core';
import { WeatherModule } from '../weather/weather.module';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  num: number[] = [1,2,3,4,5,6,7,8,9,10]
  
}
