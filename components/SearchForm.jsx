import React, { useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const SearchForm = () => {
	const [value, setValue] = useState('');

	const { handleSearch } = useContext(SearchContext);

	const onSubmit = (e) => {
		e.preventDefault();
		handleSearch(value);
	};

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				name="search"
				value={value}
				placeholder="Search..."
				className="border-solid border border-gray-300 p-2 rounded-lg outline-none focus:border-cyan-500"
				onChange={onChange}
			/>
			<button
				type="submit"
				className="bg-cyan-500 hover:bg-cyan-700 transition duration-150 ease-in text-white p-2 rounded-lg ml-2 font-semibold"
			>
				Search
			</button>
		</form>
	);
};

export default SearchForm;
