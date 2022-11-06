import { Component, OnInit } from '@angular/core';
import { IReverseGeo } from 'src/app/models/interfaces/reverse-geo.interface';
import { OpenweatherGeoApiService } from 'src/app/services/openweather-geo-api.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {
  lsKey: string = 'wAppCities';
  storageCities: string[] = [];
  curCities: string[] = [];
  geolocationCity: string = '';
  selectedCity: string = '';

  constructor(private _openweatherGeoApi: OpenweatherGeoApiService) { }

  ngOnInit(): void {
    const storageCities = localStorage.getItem(this.lsKey);
    this.storageCities = storageCities ? JSON.parse(storageCities) : [];

    this._getGeolocation();
  }

  private _getGeolocation(): void {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(this._getCityName.bind(this), this._errClbk, options);
  }

  private _getCityName(position: GeolocationPosition): void {
    this._openweatherGeoApi.getReverseGeocoding(position.coords.latitude, position.coords.longitude, 1).subscribe((res: IReverseGeo[]): void => {
      if (res) {
        this.geolocationCity = res[0].name;
        this.selectedCity = this.geolocationCity;
        this._getSelectedCityWeather();
      }
    });
  }

  private _errClbk(err: GeolocationPositionError): void {
    // TODO add logic
    console.error(err);
  }

  private _getSelectedCityWeather(): void {
  }
}
