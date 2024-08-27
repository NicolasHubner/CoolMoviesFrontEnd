import {ReviewActions, ReviewSliceActionsType} from "./slice";
import {combineEpics, Epic, StateObservable} from "redux-observable";
import {RootState} from "@/store";
import {Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {useCreateReview, useGetAllReviews, useUpdateReview} from "@/domain"
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


export const createReviewEpic = (
    action$: Observable<ReviewSliceActionsType['addReview']>,
    state$: StateObservable<RootState>,
    {client}: EpicDependencies
) =>
    action$.pipe(
        filter(ReviewActions.addReview.match),
        switchMap(async ({payload: {data}}) =>
            useCreateReview({
                client,
                body: data.body,
                movieId: data.movieId,
                rating: data.rating,
                title: data.title,
                userReviewerId: data.userReviewerId ?? ''
            })
        )
    )


export const updateReviewEpic = (
    action$: Observable<ReviewSliceActionsType['updateReview']>,
    state$: StateObservable<RootState>,
    {client}: EpicDependencies
) =>
    action$.pipe(
        filter(ReviewActions.updateReview.match),
        switchMap(async ({payload: {data}}) =>
            useUpdateReview({
                client,
                body: data.body,
                movieId: data.movieId,
                rating: data.rating,
                title: data.title,
                reviewId: data.reviewId,
                userReviewerId: data.userReviewerId
            })
        )
    )

export const reviewsEpics = combineEpics(allReviewsEpics, createReviewEpic);