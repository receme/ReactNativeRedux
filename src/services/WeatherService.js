import React, { Component } from 'react';

export default class WeatherService {

    static serviceController;

    constructor(_serviceController) {
        serviceController = _serviceController;
    }

    fetchWeatherData() {
        return Promise.resolve(serviceController.fetchWeatherData());
    }

}