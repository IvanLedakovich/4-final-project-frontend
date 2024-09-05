import axios from 'axios';

let allRecipes;

const handleRequestError = (error: any) => {
	console.error('Ошибка запроса:', error);
	throw error;
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
