import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import RecipePage from './Pages/RecipePage';

function App(): JSX.Element {
	const recipes = useSelector((state: any) => state.recipes);


	

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LogIn />} />
				<Route index element={<Home />} />
				{recipes.map((index) => (
					<Route key={index} path="/recipes/:id" element={<RecipePage />} />
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
