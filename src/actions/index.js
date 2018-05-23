import axios from 'axios';
import { FETCH_ANIMALS, CREATE_ANIMAL } from './constants';

export function selectAnimal(animal) {
	return {
		type: 'ANIMAL_CLICKED',
		payload: animal
	}
}

export function getAnimalsList() {
	
	return function(dispatch) {
		const url = 'http://localhost:3000/animals';
		const request = axios.get(url);

		request.then(response => {
			dispatch({
				type: FETCH_ANIMALS,
				payload: response.data
			})
		}).catch(err => console.log(err))
	}
}

export function createAnimal(animal) {
	return function(dispatch) {
		const url = 'http://localhost:3000/animals';
		const post = axios.post(url, animal);

		post.then( response => {
			dispatch({
				type: CREATE_ANIMAL,
				payload: response.data
			})
		}).catch(err => console.log(err))
	}
}