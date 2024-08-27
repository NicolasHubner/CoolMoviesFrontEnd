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
        // Action to fetch all reviews (you may handle this in an epic or thunk)
        fetchAllReviews: (state) => {
            // Action logic goes here (if any)
        },
        // Action when data is successfully loaded
        loaded: (state, action: PayloadAction<{ data: Review[] }>) => {
            state.fetchData = action.payload.data;
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
            state.fetchData = [...state.fetchData, action.payload.data] as Review[];
        },
        // Action to update a review and show all reviews
        updateReview: (state, action: PayloadAction<{ data: UpdateReview }>) => {
            state.fetchData = [...state.fetchData.map((review) => {
                if ((review as Review).id === (action.payload.data as Review).id) {
                    return action.payload.data;
                }
                return review;
            })] as Review[];
        },
    },
});

export const {actions, reducer} = ReviewSlice;

export type ReviewSliceActionsType = typeof actions;

export {reducer as ReviewReducer};

export {actions as ReviewActions};