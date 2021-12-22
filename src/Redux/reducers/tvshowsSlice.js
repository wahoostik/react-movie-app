/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
import baseUrl from '../../Redux/baseUrl';

const initialState = {
    loading: false,
    hasErrors: false,
    tvshows: []
};

const tvshowsSlice = createSlice({
    name: 'tvshows',
    initialState,
    reducers: {
        getTVShows: state => {state.loading = true;},
        getTVShowsSuccess: (state, { payload }) => {
            state.tvshows = payload;
            state.page = 1;
            state.loading = false;
            state.hasErrors = false;
        },
        getTVShowsFailure: state => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
});

export const tvshowsSelector = state => state.tvshows;
export const { getTVShows, getTVShowsSuccess, getTVShowsFailure } = tvshowsSlice.actions;

export function mostPopularTVShows(page) {
    return async dispatch => {
        dispatch(getTVShows());
        try {
            const response = await baseUrl.get(`tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=` + page);
            dispatch(getTVShowsSuccess(response.data.results, page));
        } catch (error) {
            dispatch(getTVShowsFailure());
        }
    };
}


export default tvshowsSlice.reducer;