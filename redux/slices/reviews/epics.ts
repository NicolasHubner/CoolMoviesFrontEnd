import {ReviewActions, ReviewSliceActionsType} from "./slice";
import {combineEpics, Epic, StateObservable} from "redux-observable";
import {RootState} from "@/store";
import {Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {useCreateReview, useGetAllReviews, useUpdateReviewById} from "@/domain"
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
            useUpdateReviewById({
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

// I was having some problems to make this work, so I had to use any
// https://stackoverflow.com/questions/47227668/combineepics-using-typescript-gives-type-error


export const reviewsEpics = combineEpics<any>(allReviewsEpics, createReviewEpic, updateReviewEpic);