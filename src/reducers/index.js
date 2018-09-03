import {combineReducers} from 'redux';
import HotelsReducer from './hotels.reducer';
import FilterReducer from  './filters.reducer';

const rootReducer = combineReducers({
    hotels: HotelsReducer,
    filter: FilterReducer
});

export default rootReducer;
