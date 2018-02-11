import React, {Component} from 'react';
import {View, Button, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Styles from './Styles';

export default class HomeView extends Component {

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

            // const info = temperature
            //     ? `${Math.floor(temperature)} deg, ${summary}`
            //     : 'No Weather Info Available. Make sure you provided a valid API key in the `config.js` file.';

            return (
                <Text style={Styles.weatherText}>
                    {info}
                </Text>
            );
        };

        const hasWeatherData = Object.keys(weatherInfo).length;

        return (
            <View style={Styles.container}>
                {hasWeatherData ? getWeatherInfo(weatherInfo) : null}
                {isLoading ? <ActivityIndicator/> : null}
                {error ? getErrorMessage() : null}
                <Button title="Fetch Data" onPress={fetchWeatherData}/>
            </View>

        );
    }
}