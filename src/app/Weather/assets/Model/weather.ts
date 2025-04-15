export interface weather {
    location?: Location;
    current?:  Current;
    forecast?: Forecast;
}

export interface Current {
    temp_c:    number;
    is_day:    number;
    condition: Condition;
    humidity:  number;
    cloud:     number;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface Forecast {
    forecastday: Forecastday[];
}

export interface Forecastday {
    date?: Date;
    day?:  Day;
}

export interface Day {
    maxtemp_c:            number;
    mintemp_c:            number;
    avgtemp_c:            number;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    condition:            Condition;
}

export interface Location {
    name:            string;
    region:          string;
    country:         string;
    lat:             number;
    lon:             number;
    tz_id:           string;
    localtime_epoch: number;
    localtime:       string;
}
