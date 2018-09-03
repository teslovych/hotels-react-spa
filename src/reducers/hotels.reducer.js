import {FETCH_HOTELS} from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_HOTELS: {
            return [...state, ...action.payload.data.hotels];
        }
    }
    return state;
}