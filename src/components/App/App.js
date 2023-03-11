import { Route, Routes } from "react-router-dom";
import {HomePage} from "pages/HomePage/HomePage";
import {CharacterPage} from "pages/CharacterPage/CharacterPage"
import "./App.css";

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/:id' element={<CharacterPage />} />
		</Routes>
	);
};
