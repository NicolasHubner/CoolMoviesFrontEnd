import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface User {
    name: string;
    id: string;
}

interface UserState {
    allUsers: User[] | string[];
    userToEdit: User | null;
}

const initialState: UserState = {
    allUsers: [],
    userToEdit: null,
};

export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchAllUsers: () => {
        },
        addUser: (state, action: PayloadAction<{ data: Omit<User, 'id'> }>) => {
        },
        loaded: (state, action: PayloadAction<{ data: User[] }>) => {
            state.allUsers = [...state.allUsers, ...action.payload.data] as User[];
        },
        userLoadedToEdit: (state, action: PayloadAction<{ data: User }>) => {
            state.userToEdit = action.payload.data;

            state.allUsers = [...state.allUsers, action.payload.data] as User[];
        },
        loadError: (state) => {
            state.allUsers = ['Error Fetching :('];
        },
    }
});

export const {actions, reducer} = UserSlice;

export type UserSliceActionsType = typeof actions

export {reducer as UserReducer};

export {actions as UserActions};