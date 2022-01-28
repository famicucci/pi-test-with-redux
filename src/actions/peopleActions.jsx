import { GET_PEOPLE, REMOVE_PERSON, HIDE_LOADING, ADD_MSG } from '../../types';
import swapiAxios from '../../config/swapiAxios';

// get people
export function getPeopleAction() {
	return async (dispatch) => {
		try {
			const r = await swapiAxios.get('/api/people/');

			dispatch(getPeople(r.data.results));
			dispatch(hideLoading());
		} catch (error) {
			dispatch(addMsg('There was an error'));
			dispatch(hideLoading());
		}
	};
}

// remove person
export function removePersonAction(name) {
	return async (dispatch) => {
		dispatch(removePerson(name));
	};
}

const getPeople = (people) => ({
	type: GET_PEOPLE,
	payload: people,
});

const removePerson = (name) => ({
	type: REMOVE_PERSON,
	payload: name,
});

const hideLoading = () => ({
	type: HIDE_LOADING,
});

const addMsg = (msg) => ({
	type: ADD_MSG,
	payload: msg,
});
