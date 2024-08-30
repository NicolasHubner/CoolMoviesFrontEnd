import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Review, UpdateReview} from "@/domain/Review";

interface ReviewState {
    fetchData: Review[] | string[];
    error: null | string;
    success: null | boolean
}

const initialState: ReviewState = {
    fetchData: [],
    error: null,
    success: null
};

export const ReviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        fetchAllReviews: (state) => {
        },
        // Action when data is successfully loaded
        loaded: (state, action: PayloadAction<{ data: Review[] }>) => {
            state.fetchData = [...action.payload.data] as Review[];
        },
        loadedSuccess: (state, action: PayloadAction<{ data: Review[] }>) => {
            state.success = true;

            state.fetchData = action.payload.data;
        },
        // Action when there is an error loading data
        loadError: (state) => {
            state.error = 'Error loading data';
        },
        // Action to clear all reviews
        clearAllReviews: (state) => {
            state.fetchData = [];
        },
        startMutation: (state) => {
            state.success = null;
        },
        success: (state) => {
            state.success = true;
        },
        // Action to add a new review
        addReview: (state, action: PayloadAction<{
            data: {
                review: Review,
                userName: string
            }
        }>) => {
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