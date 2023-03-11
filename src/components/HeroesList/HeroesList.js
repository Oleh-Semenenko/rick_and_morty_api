import { Hero } from "../Hero/Hero";
import "./HeroesList.css";

export const HeroesList = ({ heroes }) => {
	return (
		<ul className='list'>
			{heroes.map((hero) => {
				return <Hero key={hero.id} {...hero} />;
			})}
		</ul>
	);
};
