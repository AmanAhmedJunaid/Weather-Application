import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { WeatherService } from "../Services/weather.service"



export const activateapage = () => {
    const router = inject(Router)
    const weatherService = inject(WeatherService)
    if(weatherService.notFound = true){
        return true
    }
    else{
        router.navigate(['/'])
        return false
    }

}