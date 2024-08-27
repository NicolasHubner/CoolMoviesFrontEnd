import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Review, UpdateReview} from "@/domain/Review";

interface ReviewState {
    fetchData: Review[] | string[];
}

const initialState: ReviewState = {
    fetchData: [],
};

export const ReviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        fetchAllReviews: (state) => {
        },
        // Action when data is successfully loaded
        loaded: (state, action: PayloadAction<{ data: Review[] }>) => {
            state.fetchData = [...state.fetchData, ...action.payload.data] as Review[];
        },
        // Action when there is an error loading data
        loadError: (state) => {
            state.fetchData = ['Error Fetching :('];
        },
        // Action to clear all reviews
        clearAllReviews: (state) => {
            state.fetchData = [];
        },
        // Action to add a new review
        addReview: (state, action: PayloadAction<{ data: Review }>) => {
        },
        updateReview: (state, action: PayloadAction<{ data: UpdateReview }>) => {
            state.fetchData = [...state.fetchData, action.payload.data] as Review[];
        }
    },
});

const {actions, reducer} = ReviewSlice;

export type ReviewSliceActionsType = typeof actions

export {reducer as ReviewReducer};

export {actions as ReviewActions};