import * as a from './actionTypes';

export const fill = (user) => {
	return {
		type: a.FILL,
		payload: user
	};
};
