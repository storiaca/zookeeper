import { FETCH_ANIMALS, CREATE_ANIMAL, DELETE_ANIMAL } from '../actions/constants';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_ANIMALS:
        //console.log(action);
            return action.payload;
        case CREATE_ANIMAL:
            return {...state, id: action.payload};
        case DELETE_ANIMAL:
            if(action.payload === 200) {
                let newState = state.filter((elem) => {return elem.id != action.id});
                return newState;
            } else {
                console.log('an error occured', action)
            }
            
    }
    return state;
}