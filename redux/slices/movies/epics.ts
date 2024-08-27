import {combineEpics, Epic, StateObservable} from 'redux-observable';
import {Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {MovieActions, MovieSliceActionsType} from './slice';
import {EpicDependencies} from "@/types";
import {RootState} from "@/store";
import {useGetAllMovies} from "@/domain/Movie/useCases/useGetAllMovies";

export const exampleEpic: Epic = (
    action$: Observable<MovieSliceActionsType['increment']>,
    state$: StateObservable<RootState>
) =>
    action$.pipe(
        filter(MovieActions.increment.match),
        filter(() => Boolean(state$.value.movies.value % 2)),
        map(() => MovieActions.epicSideEffect())
    );

export const movieAsyncEpic: Epic = (
    action$: Observable<MovieSliceActionsType['fetchMovies']>,
    state$: StateObservable<RootState>,
    {client}: EpicDependencies
) =>
    action$.pipe(
        filter(MovieActions.fetchMovies.match),

        switchMap(async () =>
            useGetAllMovies({client})
        ),
    );


export const movieEpics = combineEpics(exampleEpic, movieAsyncEpic);

