/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
import baseUrl from '../../Redux/baseUrl';

const initialState = {
    loading: false,
    hasErrors: false,
    celebs: []
};

const celebsSlice = createSlice({
    name: 'celebs',
    initialState,
    reducers: {
        getCelebs: state => {state.loading = true;},
        getCelebsSuccess: (state, { payload }) => {
            state.celebs = payload;
            state.page = 1;
            state.loading = false;
            state.hasErrors = false;
        },
        getCelebsFailure: state => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
});

export const celebsSelector = state => state.celebs;
export const { getCelebs, getCelebsSuccess, getCelebsFailure } = celebsSlice.actions;

export function mostPopularCelebs(page) {
    return async dispatch => {
        dispatch(getCelebs());
        try {
            const response = await baseUrl.get(`person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=` + page);
            dispatch(getCelebsSuccess(response.data.results, page));
        } catch (error) {
            dispatch(getCelebsFailure());
        }
    };
}


export default celebsSlice.reducer;