import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async() => {
    const { data } = await axios.get(`${BASE_URL}/character`);
    const results = data.results;
    return results;
};

export const getCharacterById = async (id) => {
	const { data } = await axios.get(`${BASE_URL}/character/${id}`);
	return data;
};
