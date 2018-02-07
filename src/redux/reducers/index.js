import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

// Root Reducer
const reducers = combineReducers({
    weather: weatherReducer
});

export default reducers;