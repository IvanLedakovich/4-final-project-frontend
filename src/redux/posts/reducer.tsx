import * as a from './actionTypes';

const initialState = [];

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case a.FILL_INITIALLY:
			state = action.payload;
			return state;

		default:
			return state;
	}
};

export const postsLoadedReducer = (state = false, action) => {
	switch (action.type) {
		case a.SET_BOOL:
			return action.payload;

		default:
			return state;
	}
};
