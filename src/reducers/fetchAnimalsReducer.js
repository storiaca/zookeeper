import { FETCH_ANIMALS, CREATE_ANIMAL } from '../actions/constants';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_ANIMALS:
        //console.log(action);
            return action.payload;
        case CREATE_ANIMAL:
            return {...state, id: action.payload}
    }
    return state;
}