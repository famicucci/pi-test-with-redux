import axios from 'axios';

const swapiAxios = axios.create({
	baseURL: import.meta.env.VITE_SWAPI_URL,
});

export default swapiAxios;
