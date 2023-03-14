import { NavLink, useLocation } from "react-router-dom";
import "./Hero.css";

export const Hero = ({ id, name, image, species }) => {
	const location = useLocation();
	return (
		<li className='item'>
			<NavLink className='link' to={`/${id}`} state={{ from: location }}>
				<img src={image} alt={name} className='img' />
				<div className='description'>
					<p className='hero-name'>{name}</p>
					<p className='species'>{species}</p>
				</div>
			</NavLink>
		</li>
	);
};
