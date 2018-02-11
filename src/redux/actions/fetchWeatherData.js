import { FETCH_DATA_ONERROR, FETCH_DATA_REQUEST, FETCH_DATA_ONSUCCESS } from './actionTypes';
import { Alert } from 'react-native';

const fetchDataRequest = () => (
    {
        type: FETCH_DATA_REQUEST,
        payload: { isLoading: true },
    }
);

const fetchDataSuccess = (weatherInfo: Object) => (
    {
        type: FETCH_DATA_ONSUCCESS,
        payload: { weatherInfo },
    }
);

const fetchDataError = () => (
    {
        type: FETCH_DATA_ONERROR,
        payload: { error: true },
    }
);

export const fetchWeatherData = (weatherService) => (
    (dispatch: Function) => {

        dispatch(fetchDataRequest());

        weatherService.fetchWeatherData()
            .then((weatherInfo) => {
                Alert.alert(weatherInfo);
                dispatch(fetchDataSuccess(weatherInfo));
            })
            .catch(() => dispatch(fetchDataError));
    }
);
