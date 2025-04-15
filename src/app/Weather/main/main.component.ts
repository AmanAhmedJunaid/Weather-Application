import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { WeatherModule } from '../weather/weather.module';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements  AfterViewInit {

  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;


  dayStyle:string= `background: #FF9696; background: linear-gradient(15deg, rgba(255, 150, 150, 1) 0%, rgba(140, 107, 174, 1) 100%);`
  nightStyle:string= `background: #48355B; background: linear-gradient(15deg, rgba(72, 53, 91, 1) 0%, rgba(140, 110, 171, 1) 100%);`
  rainStyle:string= `background: #A8C8ED; background: linear-gradient(15deg, rgba(168, 200, 237, 1) 0%, rgba(118, 115, 220, 1) 100%);`
  public slides = [
    {
      slide: {
        title: 'Slide 1',
        image: 'assets/pic/pic1.jpg',
      }
    },
    {
      slide: {
        title: 'Slide 2',
        image: 'assets/pic/pic2.jpg',
      }
    },
    {
      slide: {
        title: 'Slide 2',
        image: 'assets/pic/pic2.jpg',
      }
    },
    {
      slide: {
        title: 'Slide 2',
        image: 'assets/pic/pic2.jpg',
      }
    },
    {
      slide: {
        title: 'Slide 2',
        image: 'assets/pic/pic2.jpg',
      }
    },
    {
      slide: {
        title: 'Slide 2',
        image: 'assets/pic/pic2.jpg',
      }
    },
    {
      slide: {
        title: 'Slide 2',
        image: 'assets/pic/pic2.jpg',
      }
    },
  ];

  public swiperParams!: SwiperOptions;

  ngAfterViewInit(): void {

    const slidesArr = this.slides;
    this.swiperParams = {
      navigation:{
        nextEl: '.button--next',
        prevEl: '.button--prev'
      }
    };

    Object.assign(this.swiperContainerRef.nativeElement, this.swiperParams); 
    this.swiperContainerRef.nativeElement.initialize(); 
  
}


}
