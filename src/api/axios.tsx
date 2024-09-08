import axios from 'axios';

let allRecipes;
let allPosts;

const handleRequestError = (error: any) => {
	console.error('Ошибка запроса:', error);
	throw error;
};

export const logInAxios = (email: string, password: string, _callback) => {
	axios
		.post(`http://localhost:8000/api/login`, { email, password })

		.then((res) => {
			_callback(res.data);
		})
		.catch((error) => {
			handleRequestError(error);
			alert('Invalid credentials');
		});
};

export const logOutAxios = (_callback) => {
	axios
		.post(`http://localhost:8000/api/logout`)

		.then(() => {
			_callback();
		})
		.catch((error) => {
			handleRequestError(error);
		});
};

export const registerAxios = (
	email: string,
	password: string,
	nickname: string,
	_callback
) => {
	const body = {
		email: email,
		password: password,
		nickname: nickname
	};

	axios
		.post(`http://localhost:8000/api/register`, body)

		.then((res) => {
			_callback(res.data);
		})
		.catch((error) => {
			handleRequestError(error);
			alert('Invalid credentials');
		});
};

export const searchRecipesAxios = (searchTerm: string, _callback) => {
	axios
		.get(`https://dummyjson.com/recipes/search?q=${searchTerm}`)

		.then((res) => {
			_callback(res.data.recipes);
		})
		.catch((error) => {
			handleRequestError(error);
		});
};

export const searchPostsAxios = (searchTerm: string, _callback) => {
	if (searchTerm.length != 0) {
		const posts = allPosts.filter(
			(post) =>
				post.header.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.text.toLowerCase().includes(searchTerm.toLowerCase())
		);

		_callback(posts);
	} else {
		// _callback(allPosts);
	}
};

export const getAllRecipesAxios = (_callback) => {
	if (!allRecipes) {
		axios
			.get(`https://dummyjson.com/recipes`)
			.then((res) => {
				allRecipes = res.data.recipes;
				_callback(res.data.recipes);
			})
			.catch((error) => {
				handleRequestError(error);
			});
	} else {
		_callback(allRecipes);
	}
};

export const getAllPostsAxios = (_callback) => {
	axios
		.get(`http://localhost:8000/api/posts`)
		.then((res) => {
			allPosts = res.data;
			_callback(res.data);
		})
		.catch((error) => {
			handleRequestError(error);
		});
};

export const sortByLikesAxios = async (_callback) => {
	axios
		.get(`http://localhost:8000/api/posts`)
		.then((res) => {
			allPosts = res.data;
			_callback(
				res.data.sort((a, b) => a.likesQuantity - b.likesQuantity).reverse()
			);
		})
		.catch((error) => {
			handleRequestError(error);
		});

	// let posts = allPosts;
	// posts.sort((a, b) => a.likesQuantity - b.likesQuantity).reverse();
	// await _callback([]);
};

export const getRecipesByDifficultyAxios = (difficulty: string, _callback) => {
	if (!allRecipes) {
		axios
			.get(`https://dummyjson.com/recipes`)
			.then((res) => {
				allRecipes = res.data.recipes;
				_callback(
					res.data.recipes.filter((recipe) => recipe.difficulty === difficulty)
				);
			})
			.catch((error) => {
				handleRequestError(error);
			});
	} else {
		_callback(allRecipes.filter((recipe) => recipe.difficulty === difficulty));
	}
};

export const getSixRecipesAxios = (count: number, _callback) => {
	axios
		.get(`https://dummyjson.com/recipes?limit=6&skip=${count}`)
		.then((res) => {
			_callback(res.data.recipes, res.data.recipes.length === 0);
		})
		.catch((error) => {
			handleRequestError(error);
		});
};

export const getSixRecipesInitiallyAxios = (_callback) => {
	axios
		.get(`https://dummyjson.com/recipes?limit=6&skip=0`)
		.then((res) => {
			_callback(res.data.recipes);
		})
		.catch((error) => {
			handleRequestError(error);
		});
};
