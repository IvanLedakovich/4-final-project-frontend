import * as a from './actionTypes';

const initialState = null;

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case a.FILL:
			return action.payload;

		default:
			return state;
	}
};

