import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOpenWeatherData } from '../models/interfaces/open-weather-data.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherApiService {
  baseUrl: string = 'http://api.openweathermap.org/data/2.5/';

  constructor(private _http: HttpClient) { }

  getWeatherByCity(cityName: string): Observable<IOpenWeatherData> {
    const apiKey: string = environment.owApiKey;
    const url: string = this.baseUrl + `weather?q=${cityName}&units=metric&appid=${apiKey}`;
    return this._http.get<IOpenWeatherData>(url);
  }
}
