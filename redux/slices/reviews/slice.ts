import {createSlice} from "@reduxjs/toolkit";
import {ReviewDefault} from "@/domain/Review";

interface ReviewState {
    fetchData: ReviewDefault[] | string[];
}

const initialState: ReviewState = {
    fetchData: [],
};

export const ReviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        fetchAllReviews: () => {
        },
        loaded: (state, action) => {
            state.fetchData = action.payload.data;
        },
        loadError: (state) => {
            state.fetchData = ['Error Fetching :('];
        },
        clearAllReviews: (state, action) => {
            state.fetchData = [];
        },
        addReview: (state, action) => {
            state.fetchData = [...state.fetchData, action.payload.data];

        },
        //Responsible for updating one review and show all reviews
        updateReview: (state, action) => {
            state.fetchData = action.payload.data;
        },
    },
});

export const {actions, reducer} = ReviewSlice;

export type ReviewSliceActionsType = typeof actions;

export {reducer as ReviewReducer};

export {actions as ReviewActions};