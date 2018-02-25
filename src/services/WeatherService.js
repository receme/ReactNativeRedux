import React from 'react';

export default class WeatherService {

    static serviceController;

    constructor(_serviceController) {
        this.serviceController = _serviceController;
    }

    fetchWeatherData() {
        return Promise.resolve(this.serviceController.fetchWeatherData());
    }

}