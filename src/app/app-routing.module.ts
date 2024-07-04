import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather/WeatherComponent';

const routes: Routes = [
  {
    path:'Weather',
    component:WeatherComponent
  },
  {
    path:'',
    redirectTo:'Weather',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
