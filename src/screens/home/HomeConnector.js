import { connect } from 'react-redux';
import Home from './Home';
import { getWeatherSelector } from '../../redux/reducers/weatherReducer';
import { fetchWeatherData } from '../../redux/actions/fetchWeatherData';
import { WeatherService } from '../../services/WeatherService';
import { DarkSkyWeatherApiService } from '../../services/DarkSkyWeatherApiService';

const mapStateToProps = (state: Object) => getWeatherSelector(state);

const mapDispatchToProps = (dispatch: Function) => ({
    fetchWeatherData: () => {
        var weatherService = new WeatherService(new DarkSkyWeatherApiService());
        dispatch(fetchWeatherData(weatherService));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);