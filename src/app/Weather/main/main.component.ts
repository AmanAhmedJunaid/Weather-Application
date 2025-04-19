import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { WeatherModule } from '../weather/weather.module';
import { SwiperOptions } from 'swiper/types';
import { WeatherService } from '../assets/Services/weather.service';
import { Forecastday, weather } from '../assets/Model/weather';
import { SwiperContainer } from 'swiper/element';
import * as $ from 'jquery'
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements AfterViewInit, OnInit {
  
  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef<SwiperContainer>;
  swiperParams!: SwiperOptions;
  styleClass:string = 'px-2 w-[60vw] sm:w-[250px]'
  isloading: boolean = true
  location: string = ''
  weatherService = inject(WeatherService)
  maxTemp: number = 0
  minTemp: number = 0
  isday: string = ''
  rainChance: number = 0
  dayStyle: string = `background: #FF9696; background: linear-gradient(15deg, rgba(255, 150, 150, 1) 0%, rgba(140, 107, 174, 1) 100%);`
  nightStyle: string = `background: #48355B; background: linear-gradient(15deg, rgba(72, 53, 91, 1) 0%, rgba(140, 110, 171, 1) 100%);`
  rainStyle: string = `background: #A8C8ED; background: linear-gradient(15deg, rgba(168, 200, 237, 1) 0%, rgba(118, 115, 220, 1) 100%);`
  weekdays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  currentDay: string = ''
  date!: Date
  isRaining:boolean=false
  currentWeather: weather = {}
  forecast: Forecastday[] = [];
  router = inject(Router)




  ngAfterViewInit(): void {
    this.swiperParams = {
      navigation: {
        nextEl: '.button--next'
      },
      breakpoints:{
        250:{
          slidesPerView:1,
        },
        450:{
          slidesPerView:2
        },
        700:{
          slidesPerView:3
        }
      }
    };

    Object.assign(this.swiperContainerRef.nativeElement, this.swiperParams);
    this.swiperContainerRef.nativeElement.initialize();
  }



  ngOnInit(): void {
   
    this.weatherService.getLocationViaIp()
    this.weatherService.ipFetched.subscribe((res)=>{
      if(res){
        this.weatherService.getWeather().subscribe((data) =>{ 
          this.isloading = true
          this.weatherService.notFound = false
          this.forecast = data.forecast?.forecastday as Forecastday[]
          setTimeout(()=>this.setWeather(data),500) 
        },
        (err)=>{
              this.isloading = true
              setTimeout(()=>{
                this.router.navigateByUrl("/not-found")
              },400)
        })
      }
    }
  )
    
  }


  setWeather(data: weather) {
    this.currentWeather = data
    this.location = `${this.currentWeather.location?.name} , ${this.currentWeather.location?.country}`
    this.isday = this.currentWeather.current?.is_day == 0 ? this.nightStyle : this.dayStyle
    this.rainChance = this.currentWeather.forecast?.forecastday[0].day?.daily_chance_of_rain as number
    if(this.rainChance > 40){
      this.isday = this.rainStyle
      this.isRaining = true
    }
    else{
      this.isRaining = false
    }
    this.maxTemp = this.currentWeather.forecast?.forecastday[0].day?.maxtemp_c as number
    this.minTemp = this.currentWeather.forecast?.forecastday[0].day?.mintemp_c as number
    this.date = new Date(this.currentWeather.location?.localtime as string);
    this.currentDay = this.weekdays[this.date.getDay()]
    // this.forecast.shift()
    this.swiperContainerRef.nativeElement.swiper.slideTo(0)
    this.isloading = false
    
  }


}
