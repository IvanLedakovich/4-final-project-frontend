import * as a from './actionTypes';

const initialState = [];

export const recipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case a.FILL_INITIALLY:
			return action.payload;
		case a.LOAD_MORE:
			return state.concat(action.payload);

		default:
			return state;
	}
};

export const recipesCountReducer = (state = 6, action) => {
	switch (action.type) {
		case a.SET_COUNT:
			return action.payload;

		default:
			return state;
	}
};

export const showMoreButtonReducer = (state = true, action) => {
	switch (action.type) {
		case a.SET_BOOL:
			return action.payload;

		default:
			return state;
	}
};

export const recipesLoadedReducer = (state = false, action) => {
	switch (action.type) {
		case a.SET_BOOL:
			return action.payload;

		default:
			return state;
	}
};
