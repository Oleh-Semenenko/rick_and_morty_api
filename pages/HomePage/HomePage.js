import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import { Logo } from "../../components/Logo/Logo";
import { Filter } from "../../components/Filter/Filter";
import { HeroesList } from "components/HeroesList/HeroesList";
import { getAllCharacters, getCharactersByName } from "../../services/api";
import "./HomePage.css";

const HomePage = () => {
	const [heroes, setHeroes] = useState([]);
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const name = searchParams.get("name") ?? '';

	const handleChange = (e) => {
		const { value } = e.target;
		setSearchParams({ name: value });
	};

	useEffect(() => {
		async function getHeroes() {
			try {
				if (name === "" || name === null) {
					const data = await getAllCharacters();
					setHeroes(data);
					return;
				}

				const data = await getCharactersByName(name);
				if (!data && name) {
					throw new Error("We did not find any character ");
				}
				setHeroes(data);
			} catch (error) {
				console.log(error.message);
			}
		}
		getHeroes();
	}, [name]);

	return (
		<main className='container'>
			<Logo />
			<Filter handleInputChange={handleChange} query={name} />
			<HeroesList heroes={heroes} state={{ from: location }} />
		</main>
	);
};

export default HomePage;
