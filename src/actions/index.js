import axios from 'axios';

export const FilterTypes = {
    RATING: 'RATING',
    NAME: 'NAME',
    OPTION: 'OPTION'
};

export const SET_RATE_FILTER = 'SET_RATE_FILTER';
export const SET_NAME_FILTER = 'SET_NAME_FILTER';
export const SET_OPTION_FILTER = 'SET_OPTION_FILTER';
export const FETCH_HOTELS = 'FETCH_HOTELS';
export const SHOW_MODAL_INFO = 'SHOW_MODAL_INFO';

export function fetchHotels() {
    const url = './fetch-src/data.json';
    const request = axios.get(url);

    return {
        type: FETCH_HOTELS,
        payload: request
    }
}

export function setRatingFilter(value) {

    return {
        type: SET_RATE_FILTER,
        payload: value
    }
}

export function setNameFilter(value) {

    return {
        type: SET_NAME_FILTER,
        payload: value
    }
}

export function setOptionFilter(value) {

    return {
        type: SET_OPTION_FILTER,
        payload: value
    }
}

export function showModalInfo(value) {

    return {
        type: SHOW_MODAL_INFO,
        payload: value
    }
}

