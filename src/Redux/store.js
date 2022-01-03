import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';
import tvshowsReducer from './reducers/tvshowsSlice';
import celebsReducer from './reducers/celebsSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        tvshows: tvshowsReducer,
        celebs: celebsReducer
    },
});
