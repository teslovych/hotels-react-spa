import {SET_OPTION_FILTER, SET_NAME_FILTER, SET_RATE_FILTER, FilterTypes} from '../actions';

const initFiltersState = {
    [FilterTypes.RATING]: 1,
    [FilterTypes.NAME]: null,
    [FilterTypes.OPTION]: null
};

export default function (state = initFiltersState, action) {

    switch (action.type) {
        case SET_RATE_FILTER: {
            return {...state, [FilterTypes.RATING]: action.payload};
        }
        case SET_NAME_FILTER: {
            return {...state, [FilterTypes.NAME]: action.payload};
        }
        case SET_OPTION_FILTER: {
            return {...state, [FilterTypes.OPTION]: action.payload};
        }
    }
    return state;
}