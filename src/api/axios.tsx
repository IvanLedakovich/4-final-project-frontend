import axios from 'axios';
import Cookies from 'js-cookie';

const token = 'JWT_TOKEN';
Cookies.set('jwt', token, { expires: 999, secure: true });

let allRecipes;
let allPosts;

axios.defaults.withCredentials = true;

const handleRequestError = (error: any) => {
	console.error('Ошибка запроса:', error);
};

export const logInAxios = (email: string, password: string, _callback) => {
	axios
		.post(`http://localhost:8000/api/login`, { email, password })

		.then((res) => {
			_callback(res.data);
		})
		.catch((error) => {
			handleRequestError(error);
			_callback();
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
	let myPosts = Array(1).fill(0);
	let likedPosts = Array(1).fill(0);

	const body = {
		email: email,
		password: password,
		nickname: nickname,
		myPosts: myPosts,
		likedPosts: likedPosts
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

export const toggleLikeOnAccountAxios = (
	user,
	post,
	_callback,
	_callback2,
	isLikedPostByCurrentUser
) => {
	let newUser = JSON.parse(JSON.stringify(user));

	if (isLikedPostByCurrentUser) {
		newUser.likedPosts = user.likedPosts.filter((e) => e !== Number(post.id));
	} else {
		newUser.likedPosts.push(Number(post.id));
	}

	axios
		.post(`http://localhost:8000/api/update`, newUser)

		.then(() => {
			_callback(newUser);
			likeOnPostAxios(Number(post.id), isLikedPostByCurrentUser, _callback2);
		})
		.catch((error) => {
			handleRequestError(error);
			alert('Invalid credentials');
		});
};

export const updateProfileAxios = (user, _callback) => {
	axios
		.post(`http://localhost:8000/api/update`, user)

		.then(() => {
			_callback(user);
		})
		.catch((error) => {
			handleRequestError(error);
			alert('Error');
		});
};

export const likeOnPostAxios = (postId, iLikedThisPost, _callback) => {
	let value = iLikedThisPost ? -1 : 1;

	axios
		.put(`http://localhost:8000/api/posts/like`, { postId, value })

		.then(() => {
			getAllPostsAxios(_callback);
		})
		.catch((error) => {
			handleRequestError(error);
			alert('Could not update likes value');
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
	if (searchTerm.length !== 0) {
		const posts = allPosts.filter(
			(post) =>
				post.header.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.text.toLowerCase().includes(searchTerm.toLowerCase())
		);

		_callback(posts);
	} else {
		_callback(allPosts);
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

export const createPostAxios = (image, header, text) => {
	const form = new FormData();
	form.append('file', image);
	form.append('header', header);
	form.append('text', text);

	const config = {
		formSerializer: {
			indexes: null
		},
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	};

	axios
		.post(`http://localhost:8000/api/posts/create`, form, config)

		.then((res) => {
			console.log(res.data);
		})
		.catch((error) => {
			handleRequestError(error);
			alert('Invalid credentials');
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
};

export const sortByAgeAxios = async (_callback) => {
	axios
		.get(`http://localhost:8000/api/posts`)
		.then((res) => {
			allPosts = res.data;
			_callback(res.data.sort((a, b) => a.id - b.id).reverse());
		})
		.catch((error) => {
			handleRequestError(error);
		});
};

export const getMyPostsAxios = async (userId, _callback) => {
	axios
		.get(`http://localhost:8000/api/posts`)
		.then((res) => {
			allPosts = res.data;
			_callback(res.data.filter((post) => post.authorId === userId));
		})
		.catch((error) => {
			handleRequestError(error);
		});
};

export const getPostsILikedAxios = async (user, _callback) => {
	axios
		.get(`http://localhost:8000/api/posts`)
		.then((res) => {
			allPosts = res.data;
			let posts = new Array();
			user.likedPosts.forEach((likedPostId) => {
				if (res.data.find((element) => element.id === likedPostId)) {
					posts.push(res.data.find((element) => element.id === likedPostId));
				}
			});

			_callback(posts);
		})
		.catch((error) => {
			handleRequestError(error);
		});
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
