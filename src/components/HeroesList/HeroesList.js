import {  useLocation } from "react-router-dom";
import { Hero } from "../Hero/Hero";
import "./HeroesList.css";

export const HeroesList = ({ heroes }) => {
	const location = useLocation();

	return (
		<ul className='list'>
			{heroes.length > 0 ? (
				heroes.map((hero) => {
					return <Hero key={hero.id} {...hero} state={{ from: location }} />;
				})
			) : (
				<div>Sorry, we did not find any character</div>
			)}
		</ul>
	);
};
