import {ReviewActions, ReviewSliceActionsType} from "./slice";
import {Epic, StateObservable} from "redux-observable";
import {RootState} from "@/store";
import {Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {useGetAllReviews} from "@/domain/Review";
import {EpicDependencies} from "@/types";


export const allReviewsEpics: Epic = (
    action$: Observable<ReviewSliceActionsType['fetchAllReviews']>,
    state$: StateObservable<RootState>,
    {client}: EpicDependencies
) =>
    action$.pipe(
        filter(ReviewActions.fetchAllReviews.match),

        switchMap(async () =>
            useGetAllReviews({client})
        ),
    )
