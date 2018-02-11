import HttpService from './core/httpservice/HttpService';
import { Alert } from 'react-native';
import AppConfig from '../config/AppConfig';

export default class DarkskyApiService {

    constructor() {

    }

    fetchWeatherData(onSuccess, onFailure) {
        return HttpService.getContent(AppConfig.API_URL)
            .then((data) => {
                var currentWeather = JSON.stringify(data.currently);
                return currentWeather;
            })
            .catch((err) => err);

    }
}