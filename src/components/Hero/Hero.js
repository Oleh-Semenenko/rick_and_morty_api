import { NavLink } from "react-router-dom";
import "./Hero.css";

export const Hero = ({ id, name, image, species }) => {
	return (
		<li className='item'>
			<NavLink to={`/${id}`}>
				<img src={image} alt={name} className='img' />
				<div className='description'>
					<p className='hero-name'>{name}</p>
					<p className='species'>{species}</p>
				</div>
			</NavLink>
		</li>
	);
};
