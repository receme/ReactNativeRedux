import React, { Component } from 'react';

export default class WeatherService extends Component {

    constructor(_serviceController) {
        super();
        serviceController = _serviceController;
    }

    fetchWeatherData() {
        var weatherData = serviceController.fetchWeatherData();
        return weatherData;
    }

}