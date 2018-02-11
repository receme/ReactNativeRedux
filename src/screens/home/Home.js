import React, {Component} from 'react';
import HomeView from './HomeView';


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

        return (

            <HomeView
                isLoading={isLoading}
                error={error}
                fetchWeatherData={fetchWeatherData}
                weatherInfo={weatherInfo}
            />
        );
    }

}
