import {EpicDependencies} from "@/types";
import {UPDATE_REVIEW_MUTATION, UpdateReview} from "@/domain";

interface UseUpdateReview extends EpicDependencies, UpdateReview {
}

export const useUpdateReview = async ({
                                          client,
                                          title,
                                          body,
                                          rating,
                                          movieId,
                                          reviewId,
                                      }: UseUpdateReview) => {
    try {
        const {data} = await client.mutate({
            mutation: UPDATE_REVIEW_MUTATION,
            variables: {
                input: {
                    movieReviewPatch: {
                        title,
                        body,
                        rating,
                        movieId,
                    },
                    id: reviewId,
                },
            },
        });
    } catch (err) {
        throw err;
    }
}
