import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';
import tvshowsReducer from './reducers/tvshowsSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        tvshows: tvshowsReducer
    },
});
