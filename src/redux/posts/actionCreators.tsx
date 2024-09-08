import * as a from './actionTypes';

export const fillInitially = (recipes) => {
	return {
		type: a.FILL_INITIALLY,
		payload: recipes
	};
};

export const postsLoaded = (boolean) => {
	return {
		type: a.SET_BOOL,
		payload: boolean
	};
};
