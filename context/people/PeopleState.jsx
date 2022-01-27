import React, { useReducer } from 'react';
import PeopleContext from './PeopleContext';
import PeopleReducer from './PeopleReducer';
import swapiAxios from '../../config/swapiAxios';

import { GET_PEOPLE, REMOVE_PERSON, HIDE_LOADING, ADD_MSG } from '../../types';

const PeopleState = (props) => {
	const initialState = {
		people: [],
		loading: true,
		msg: '',
	};

	const [state, dispatch] = useReducer(PeopleReducer, initialState);

	const getPeople = async () => {
		try {
			const r = await swapiAxios.get('/api/people/');

			dispatch({
				type: GET_PEOPLE,
				payload: r.data.results,
			});

			dispatch({
				type: HIDE_LOADING,
			});
		} catch (error) {
			dispatch({
				type: ADD_MSG,
				payload: 'There was an error',
			});

			dispatch({
				type: HIDE_LOADING,
			});
		}
	};

	const removePerson = (name) => {
		dispatch({
			type: REMOVE_PERSON,
			payload: name,
		});
	};

	return (
		<PeopleContext.Provider
			value={{
				people: state.people,
				loading: state.loading,
				msg: state.msg,
				getPeople,
				removePerson,
			}}
		>
			{props.children}
		</PeopleContext.Provider>
	);
};

export default PeopleState;
