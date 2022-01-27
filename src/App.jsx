import CardList from '../components/CardList';
import SearchForm from '../components/SearchForm';
import PeopleState from '../context/people/PeopleState';
import SearchProvider from '../context/SearchContext';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<main className="w-full md:w-1/2 md:mx-auto p-2">
			<Provider store={store}>
				<PeopleState>
					<SearchProvider>
						<SearchForm />
						<CardList />
					</SearchProvider>
				</PeopleState>
			</Provider>
		</main>
	);
}

export default App;
