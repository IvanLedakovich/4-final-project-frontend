import { configureStore } from '@reduxjs/toolkit';
import { postsLoadedReducer, postsReducer } from './posts/reducer';
import { userReducer } from './user/reducer';

const store = configureStore({
	reducer: {
		posts: postsReducer,
		user: userReducer,
		postsLoaded: postsLoadedReducer
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
