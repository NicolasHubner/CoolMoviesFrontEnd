import {EpicDependencies} from "@/types";
import {
    AllReviewsResponse,
    mapperReviewsDefaultToReview,
    QUERY_ALL_REVIEWS,
    UPDATE_REVIEW_MUTATION,
    UpdateReview
} from "@/domain";
import {ReviewActions} from "@/redux";

interface UseUpdateReviewById extends EpicDependencies, UpdateReview {
}

export const useUpdateReviewById = async ({
                                              client,
                                              title,
                                              body,
                                              rating,
                                              movieId,
                                              reviewId,
                                          }: UseUpdateReviewById) => {
    try {
        await client.mutate<AllReviewsResponse>({
            mutation: UPDATE_REVIEW_MUTATION,
            variables: {
                title,
                body,
                rating,
                movieId,
                id: reviewId,
            },
        });

        // I could create one more layer of abstraction here like SERVICES and refactor this to be more readable
        const {data} = await client.query<AllReviewsResponse>({
            query: QUERY_ALL_REVIEWS,
            fetchPolicy: 'no-cache',
        });

        return ReviewActions.loadedSuccess({data: mapperReviewsDefaultToReview(data)});

    } catch (err) {
        return ReviewActions.loadError();
    }
}
