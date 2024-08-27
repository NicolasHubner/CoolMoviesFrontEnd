import {EpicDependencies} from "@/types";
import {CREATE_REVIEW_MUTATION} from "@/domain/Review/graphql/mutations/createReview";
import {ReviewActions} from "@/redux";

export interface CreateReview {
    title: string;
    body: string;
    rating: number;
    movieId: string;
    userReviewerId: string;
}

interface UseCreateReview extends EpicDependencies, CreateReview {
}

export const useCreateReview = async ({
                                          client,
                                          title,
                                          body,
                                          rating,
                                          movieId,
                                          userReviewerId,
                                      }: UseCreateReview) => {
    try {
        const {data} = await client.mutate({
            mutation: CREATE_REVIEW_MUTATION,
            variables: {
                input: {
                    movieReview: {
                        title,
                        body,
                        rating,
                        movieId,
                        userReviewerId,
                    },
                },
            },
        });

        return ReviewActions.loaded({data});
    } catch (err) {
        return ReviewActions.loadError();
    }
}