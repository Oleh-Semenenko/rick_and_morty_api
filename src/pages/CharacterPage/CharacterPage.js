import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../services/api";
import "./CharacterPage.css";

export const CharacterPage = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState(null);

	useEffect(() => {
		async function getCharacter() {
			const searchCharacter = await getCharacterById(id);
			setCharacter(searchCharacter);
			console.log(searchCharacter);
		}
		getCharacter();
	}, [id]);

	return (
		<>
			{character && (
				<div>
					<img src={character.image} alt={character.name} className='img' />
					<h1>{character.name}</h1>
					<div className='description'>
						<h2>Informations</h2>
						<ul>
							<li className='info-item'>
								<span>Gender</span>
								<span>{character.gender}</span>
							</li>
							<li className='info-item'>
								<span>Status</span>
								<span>{character.status}</span>
							</li>
							<li className='info-item'>
								<span>Specie</span>
								<span>{character.species}</span>
							</li>
							<li className='info-item'>
								<span>Origin</span>
								<span>{character.origin.name}</span>
							</li>
							<li className='info-item'>
								<span>Type</span>
								<span>{character.type ? character.type : "Unknown"}</span>
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};
