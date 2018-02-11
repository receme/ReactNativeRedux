import React, { Component } from 'react';
import HomeView from './HomeView';
import { Alert } from 'react-native';
import DarkskyApiService from '../../services/DarkskyApiService';


export default class Home extends Component {

    constructor(props) {
        super(props);
        // const {
        //     isLoading,
        //     error,
        //     fetchWeatherData,
        //     weatherInfo,
        // } = props;
    }

    render() {

        return (

            <HomeView
                isLoading={this.props.isLoading}
                error={this.props.error}
                fetchWeatherData={this.props.fetchWeatherData}
                weatherInfo={this.props.weatherInfo}
            />
        );
    }

}
