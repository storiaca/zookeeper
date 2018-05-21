import axios from 'axios';

export function selectAnimal(animal) {
	return {
		type: 'ANIMAL_CLICKED',
		payload: animal
	}
}

export function getAnimalsList() {
	const url = 'http://localhost:3000/animals';

	const request = axios.get(url);

	return {
		type: 'FETCH_ANIMALS',
		payload: request
	}
}