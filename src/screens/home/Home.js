import React, { Component } from 'react';
import HomeView from './HomeView';


export default class Home extends Component {

    constructor(props) {
        super(props);
        const {
            isLoading,
            error,
            fetchData,
            weatherInfo,
        } = props;
    }

    render() {
        return (
            <HomeView
                isLoading={this.isLoading}
                error={this.error}
                fetchData={this.fetchData}
                weatherInfo={this.weatherInfo}
            />
        );
    }
}
