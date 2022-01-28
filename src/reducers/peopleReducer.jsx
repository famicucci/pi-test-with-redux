import { GET_PEOPLE, REMOVE_PERSON, HIDE_LOADING, ADD_MSG } from '../../types';

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
		case HIDE_LOADING:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
