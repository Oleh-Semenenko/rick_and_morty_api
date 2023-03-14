import { useState, useEffect } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { getCharacterById } from "../../services/api";
import "./CharacterPage.css";

const CharacterPage = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState(null);
	const location = useLocation();

	const backLinkHref = location.state?.from ?? "/";

	useEffect(() => {
		async function getCharacter() {
			const searchCharacter = await getCharacterById(id);
			setCharacter(searchCharacter);
		}
		getCharacter();
	}, [id]);

	return (
		<>
			{character && (
				<div className='character-container'>
					<NavLink to={backLinkHref} className='go-back-link'>
						Go back
					</NavLink>
					<img src={character.image} alt={character.name} className='avatar' />
					<h1 className='character-name'>{character.name}</h1>
					<div className='description'>
						<h2 className='description-title'>Informations</h2>
						<ul>
							<li className='info-item'>
								<span className='info-title'>Gender</span>
								<span className='info-value'>{character.gender}</span>
							</li>
							<li className='info-item'>
								<span className='info-title'>Status</span>
								<span className='info-value'>{character.status}</span>
							</li>
							<li className='info-item'>
								<span className='info-title'>Specie</span>
								<span className='info-value'>{character.species}</span>
							</li>
							<li className='info-item'>
								<span className='info-title'>Origin</span>
								<span className='info-value'>{character.origin.name}</span>
							</li>
							<li className='info-item'>
								<span className='info-title'>Type</span>
								<span className='info-value'>
									{character.type ? character.type : "Unknown"}
								</span>
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default CharacterPage;
