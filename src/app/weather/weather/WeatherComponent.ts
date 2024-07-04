import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../../service/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weatherForm = new FormGroup({
  location: new FormControl('')
  });
  WeatherData!: any;
  constructor(private weatherService: WeatherService) { }

  onsubmit() {
    console.log(this.weatherForm);
    this.weatherService.getWeatherData(this.weatherForm.controls.location.value ?? 'sangli')
    .subscribe((result)=> {
        console.log(result);
        this.WeatherData = result;
      })
  }
}
