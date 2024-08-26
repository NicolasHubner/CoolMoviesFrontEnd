import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ExampleState {
    value: number;
    sideEffectCount: number;
    fetchData?: unknown[];
}

const initialState: ExampleState = {
    value: 0,
    sideEffectCount: 0,
};

export const MovieSlice = createSlice({
    initialState,
    name: 'example',
    reducers: {
        fetchMovies: () => {
        },
        clearData: (state) => {
            state.fetchData = undefined;
        },
        loaded: (state, action: PayloadAction<{ data: unknown[] }>) => {
            state.fetchData = action.payload.data;
        },
        loadError: (state) => {
            state.fetchData = ['Error Fetching :('];
        },
        increment: (state) => {
            state.value += 1;
        },
        epicSideEffect: (state) => {
            state.sideEffectCount += 1;
        },
    },
});

const {actions, reducer} = MovieSlice;

export type MovieSliceActionsType = typeof actions;

export {reducer as MovieReducer};

export {actions as MovieActions};