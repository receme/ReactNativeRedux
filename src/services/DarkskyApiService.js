import HttpService from './core/httpservice/HttpService';
import { Alert } from 'react-native';
import AppConfig from '../config/AppConfig';

export default class DarkskyApiService {

    constructor() {
    }

    fetchWeatherData() {
        return HttpService.getContent(AppConfig.API_URL)
            .then((data) => {
                var currentWeather = JSON.stringify(data.currently);
                return JSON.parse(currentWeather);
            })
            .catch((err) => err);

    }
}