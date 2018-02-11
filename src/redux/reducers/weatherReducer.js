import {FETCH_DATA_ONERROR, FETCH_DATA_ONSUCCESS, FETCH_DATA_REQUEST} from '../actions/actionTypes';

const initialState = {
    weatherInfo: {message:"Press this button to get weather data"},
    isLoading: false,
    error: false,
};

export const getWeatherSelector = (state: Object) => ({ ...state.weather });

const weatherReducer = (state: Object = initialState, action: Object) => {
    switch (action.type) {
        case FETCH_DATA_ONSUCCESS: {

            return {
                isLoading: false,
                error: false,
                weatherInfo: action.payload.weatherInfo,
            };
        }
        case FETCH_DATA_REQUEST: {
            return {
                isLoading: true,
                error: false,
                weatherInfo: {},
            };
        }
        case FETCH_DATA_ONERROR: {
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        }
        default: {
            return state;
        }
    }
};

export default weatherReducer;