# Description

It is necessary to develop a one-page weather application. Display data can be taken from https://fcc-weather-api.glitch.me/api/current?lat=48&lon=31 or any other open API.

The application must be able to:
Automatically request weather based on user coordinates - this is the default city/place.
Add / remove cities (if more than 5 cities are added to the list - pagination).
The default city is always at the top of the list and highlighted in a different color.
Store data locally in LocalStorage/IndexedDB.
Responsive & user-friendly interface.

# Requirements

Angular 14.2
Angular Material 14.2

# Installation

git clone git@github.com:yuzub/simple-weather-app.git
cd simple-weather-app
npm install
npm start
open http://localhost:5700/

# TestWeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
