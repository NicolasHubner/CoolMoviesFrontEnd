import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {movieEpics, MovieReducer} from '@/redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {CreateStoreOptions} from "@/types";

const rootEpic = combineEpics(movieEpics);

export const createStore = ({epicDependencies}: CreateStoreOptions): ReturnType<typeof configureStore> => {
    const epicMiddleware = createEpicMiddleware({
        dependencies: epicDependencies,
    });

    const createdStore = configureStore({
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(epicMiddleware),
        reducer: {
            example: MovieReducer,
        },
    });

    epicMiddleware.run(rootEpic);

    return createdStore;
};

//@ts-ignore
export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
