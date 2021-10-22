/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
import baseUrl from '../../Redux/baseUrl';

const initialState = {
    loading: false,
    hasErrors: false,
    movies:[]
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getTrendingMovies: state => {state.loading = true;},
        getTrendingMoviesSuccess: (state, { payload }) => {
            state.movies = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getTrendingMoviesFailure: state => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
});

export const moviesSelector = state => state.movies;
export const { getTrendingMovies, getTrendingMoviesSuccess, getTrendingMoviesFailure } = moviesSlice.actions;

export function trendingMovies() {
    return async dispatch => {
        dispatch(getTrendingMovies());

        try {
            const response = await baseUrl.get(`trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
            dispatch(getTrendingMoviesSuccess(response.data.results));
        } catch (error) {
            dispatch(getTrendingMoviesFailure());
        }
    };
}


export default moviesSlice.reducer;