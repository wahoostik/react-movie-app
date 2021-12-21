/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
import baseUrl from '../../Redux/baseUrl';

const initialState = {
    loading: false,
    hasErrors: false,
    movies: [],
    tvshows: []
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMovies: state => {state.loading = true;},
        getMoviesSuccess: (state, { payload }) => {
            state.movies = payload;
            state.page = 1;
            state.loading = false;
            state.hasErrors = false;
        },
        getTVShowsSuccess: (state, { payload }) => {
            state.tvshows = payload;
            state.page = 1;
            state.loading = false;
            state.hasErrors = false;
        },
        getMoviesFailure: state => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
});

export const moviesSelector = state => state.movies;
export const { getMovies, getMoviesSuccess, getTVShowsSuccess, getMoviesFailure } = moviesSlice.actions;

export function trendingMovies(page) {
    return async dispatch => {
        dispatch(getMovies());
        try {
            const response = await baseUrl.get(`trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=` + page);
            dispatch(getMoviesSuccess(response.data.results, page));
        } catch (error) {
            dispatch(getMoviesFailure());
        }
    };
}

export function topRatedMovies(page) {
    return async dispatch => {
        dispatch(getMovies());
        try {
            const response = await baseUrl.get(`movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=` + page);
            dispatch(getMoviesSuccess(response.data.results, page));
        } catch (error) {
            dispatch(getMoviesFailure());
        }
    };
}

export function mostPopularTVShows() {
    return async dispatch => {
        dispatch(getMovies());
        try {
            const response = await baseUrl.get(`tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
            dispatch(getTVShowsSuccess(response.data.results));
        } catch (error) {
            dispatch(getMoviesFailure());
        }
    };
}


export default moviesSlice.reducer;