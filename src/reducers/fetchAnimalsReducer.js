import {FETCH_ANIMALS} from '../actions/constants';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_ANIMALS:
        //console.log(action);
        return action.payload
    }
    return state;
}