import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  ApiKey ='4c6766d15a714d17adb130829240307';
  constructor(private http: HttpClient) { }
  
  getWeatherData(location:string){
    return this.http.get('https://api.weatherapi.com/v1/current.json?q='+location+'&key='+this.ApiKey)
  }
}
