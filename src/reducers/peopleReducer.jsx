import { GET_PEOPLE, REMOVE_PERSON, HIDE_LOADING, ADD_MSG } from '../types';

const initialState = {
	people: [],
	loading: true,
	msg: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_PEOPLE:
			return {
				...state,
				people: action.payload,
			};
		case REMOVE_PERSON:
			return {
				...state,
				people: state.people.filter((person) => person.name !== action.payload),
			};
		case HIDE_LOADING:
			return {
				...state,
				loading: false,
			};
		case ADD_MSG:
			return {
				...state,
				msg: action.payload,
			};
		default:
			return state;
	}
}
