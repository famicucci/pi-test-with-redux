import CardList from '../components/CardList';
import SearchForm from '../components/SearchForm';
import SearchProvider from '../context/SearchContext';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<main className="w-full md:w-1/2 md:mx-auto p-2">
			<Provider store={store}>
				<SearchProvider>
					<SearchForm />
					<CardList />
				</SearchProvider>
			</Provider>
		</main>
	);
}

export default App;
