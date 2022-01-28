import React, { useContext, useEffect } from 'react';
import Card from './Card';
import Pulse from './Pulse';
import { SearchContext } from '../context/SearchContext';
import MsgError from './MsgError';
import { getPeopleAction } from '../src/actions/peopleActions';
import { useDispatch, useSelector } from 'react-redux';

const CardList = () => {
	const { search, filterByName } = useContext(SearchContext);

	const people = useSelector((state) => state.people.people);
	const loading = useSelector((state) => state.people.loading);
	const msg = useSelector((state) => state.people.msg);

	// use useDispatch
	const dispatch = useDispatch();
	const getPeople = () => dispatch(getPeopleAction());

	useEffect(() => {
		getPeople();
	}, []);

	const n = 10;

	return (
		<section className="my-4">
			{!loading ? (
				<>
					{filterByName(people, search).map((person) => (
						<Card
							key={person.name}
							name={person.name}
							height={person.height}
							gender={person.gender}
						/>
					))}
				</>
			) : (
				<>
					{[...Array(n)].map((e, i) => (
						<div className="mb-2" key={i}>
							<Pulse />
						</div>
					))}
				</>
			)}
			{!loading && msg ? <MsgError content={msg} /> : null}
		</section>
	);
};

export default CardList;
