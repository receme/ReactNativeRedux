import React, {Component} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
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
            getErrorMessage,
            getWeatherInfo,
            hasWeatherData
        } = this.props;

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