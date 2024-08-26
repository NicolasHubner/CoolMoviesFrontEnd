import { Epic, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { actions, SliceAction } from './slice';
import {EpicDependencies} from "@/types";
import {RootState} from "@/store";
import {useGetAllMovies} from "@/domain/Movie/useCases/useGetAllMovies";

export const exampleEpic: Epic = (
  action$: Observable<SliceAction['increment']>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.increment.match),
    filter(() => Boolean(state$.value.example.value % 2)),
    map(() => actions.epicSideEffect())
  );

export const movieAsyncEpic: Epic = (
  action$: Observable<SliceAction['fetchMovies']>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetchMovies.match),

    switchMap(async () =>
      useGetAllMovies({ client })
    ),

  );

