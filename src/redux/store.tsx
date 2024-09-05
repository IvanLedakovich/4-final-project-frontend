import { configureStore } from '@reduxjs/toolkit';
import {
	recipesCountReducer,
	recipesLoadedReducer,
	recipesReducer,
	showMoreButtonReducer
} from './recipes/reducer';
import { userReducer } from './user/reducer';

const store = configureStore({
	reducer: {
		recipes: recipesReducer,
		recipesCount: recipesCountReducer,
		showMoreButton: showMoreButtonReducer,
		recipesLoaded: recipesLoadedReducer,
		user: userReducer
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
