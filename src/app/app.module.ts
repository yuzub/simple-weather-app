import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    CityWeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
