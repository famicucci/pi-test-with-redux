import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchProvider = (props) => {
	const [search, setSearch] = useState('');

	const handleSearch = (value) => {
		setSearch(value);
	};

	const filterByName = (rows, search) => {
		const searchMod = search.toLowerCase();

		const r = rows.filter(
			(row) => row.name.toLowerCase().indexOf(searchMod) !== -1
		);

		return r;
	};

	return (
		<SearchContext.Provider
			value={{
				search,
				handleSearch,
				filterByName,
			}}
		>
			{props.children}
		</SearchContext.Provider>
	);
};

export default SearchProvider;
