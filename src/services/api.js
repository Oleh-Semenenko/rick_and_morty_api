import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async () => {
	const { data } = await axios.get(`${BASE_URL}/character`);
	const results = data.results;
	const sortedByName = results.sort((a, b) => (a.name > b.name ? 1 : -1));
	return sortedByName;
};

export const getCharacterById = async (id) => {
	const { data } = await axios.get(`${BASE_URL}/character/${id}`);
	return data;
};

export const getCharactersByName = async (query) => {
	const { data } = await axios.get(`${BASE_URL}/character/?name=${query}`);
	const results = data.results;
	const sortedByName = results.sort((a, b) => (a.name > b.name ? 1 : -1));
	return sortedByName;
};
