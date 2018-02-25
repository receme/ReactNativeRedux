import React, {Component} from 'react';
import HomeView from './HomeView';
import Styles from "./Styles";
import {Text} from 'react-native';


export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            isLoading,
            error,
            fetchWeatherData,
            weatherInfo,
        } = this.props;

        const getErrorMessage = () => (
            <Text style={styles.errorText}>
                An Error occured when fetching data
            </Text>
        );

        const getWeatherInfo = (weatherInfo) => {

            const {summary, temperature, message} = weatherInfo;

            const info = (message != null && message.length > 0) ? message
                : (temperature ? `${Math.floor(temperature)} deg, ${summary}` : 'No Weather Info Available. Make sure you provided a valid API key in the `config.js` file.');

            return (
                <Text style={Styles.weatherText}>
                    {info}
                </Text>
            );
        };

        const hasWeatherData = Object.keys(weatherInfo).length;

        return (

            <HomeView
                isLoading={isLoading}
                error={error}
                fetchWeatherData={fetchWeatherData}
                weatherInfo={weatherInfo}
                getErrorMessage={getErrorMessage}
                getWeatherInfo={getWeatherInfo}
                hasWeatherData={hasWeatherData}
            />
        );
    }

}
