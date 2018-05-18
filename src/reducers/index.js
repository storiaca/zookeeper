import { combineReducers } from 'redux';

import animalReducer from './animalReducer';
import selectedAnimalReducer from './selectedAnimalReducer'

const rootReducer = combineReducers({
  animals: animalReducer,
  selectedAnimal: selectedAnimalReducer
})

export default rootReducer; 