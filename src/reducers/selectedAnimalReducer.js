export default function (state = null, action) {
	switch (action.type) {
		case 'ANIMAL_CLICKED':
			return action.payload
	}
	return state;
}