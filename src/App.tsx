import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './Pages/CreatePost';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import MyProfile from './Pages/MyProfile';
import PostPage from './Pages/PostPage';
import Register from './Pages/Register';
import UpdateProfile from './Pages/UpdateProfile';

function App(): JSX.Element {
	const posts = useSelector((state: any) => state.posts);

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<MyProfile />} />
				<Route path="/change-info" element={<UpdateProfile />} />
				<Route path="/create-post" element={<CreatePost />} />
				{posts.map((index) => (
					<Route key={index} path="/posts/:id" element={<PostPage />} />
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
