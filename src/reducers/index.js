import {combineReducers} from 'redux';
import HotelsReducer from './hotels.reducer';
import FilterReducer from './filters.reducer';
import ModalReducer from './modal.reducer';

const rootReducer = combineReducers({
    hotels: HotelsReducer,
    filter: FilterReducer,
    modal: ModalReducer
});

export default rootReducer;
