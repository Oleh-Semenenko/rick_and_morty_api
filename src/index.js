import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { App } from './components/App/App';
// import { Login } from "./pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter basename='/rick_and_morty_api'>
			{/* <Login/> */}
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

