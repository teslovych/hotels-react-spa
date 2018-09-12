import {SHOW_MODAL_INFO} from '../actions';

export default function (state = null, action) {
    switch (action.type) {
        case SHOW_MODAL_INFO: {
            return action.payload;
        }
    }
    return state;
}