import { useEffect, useState } from "react";
import { Logo } from "../../components/Logo/Logo";
import { Filter } from "../../components/Filter/Filter";
import { HeroesList } from "components/HeroesList/HeroesList";
import { getAllCharacters } from "../../services/api";
import "./HomePage.css";

export const HomePage = () => {
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		async function getHeroes() {
			const data = await getAllCharacters();
			setHeroes(data);
		}
		getHeroes();
	}, []);

	return (
		<div className='container'>
			<Logo />
			<Filter />
			<HeroesList heroes={heroes} />
		</div>
	);
};

