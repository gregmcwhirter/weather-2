import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import UnitReducer from './reducer_unit.js';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  unit: UnitReducer
});

export default rootReducer;
