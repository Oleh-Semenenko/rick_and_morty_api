import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CharacterPage = lazy(() =>
	import("../../pages/CharacterPage/CharacterPage")
);

export const App = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/:id' element={<CharacterPage />} />
			</Routes>
		</Suspense>
	);
};
