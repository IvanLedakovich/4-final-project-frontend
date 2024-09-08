import * as a from './actionTypes';

export const fillInitially = (posts) => {
	return {
		type: a.FILL_INITIALLY,
		payload: posts
	};
};

export const postsLoaded = (boolean) => {
	return {
		type: a.SET_BOOL,
		payload: boolean
	};
};
