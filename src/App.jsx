import CardList from '../components/CardList';
import SearchForm from '../components/SearchForm';
import PeopleState from '../context/people/PeopleState';
import SearchProvider from '../context/SearchContext';

function App() {
	return (
		<main className="w-full md:w-1/2 md:mx-auto p-2">
			<PeopleState>
				<SearchProvider>
					<SearchForm />
					<CardList />
				</SearchProvider>
			</PeopleState>
		</main>
	);
}

export default App;
