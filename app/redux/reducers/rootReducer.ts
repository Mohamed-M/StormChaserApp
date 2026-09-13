import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './weatherReducer';
import stormReducer from './stormReducer';

const rootReducer = combineReducers({
  storm: stormReducer,
  weather: weatherReducer
});

export default rootReducer;