import {EpicDependencies} from "@/types";
import {CREATE_REVIEW_MUTATION, CreateReviewResponse} from "@/domain/Review/graphql/mutations/createReview";
import {ReviewActions} from "@/redux";
import {AllReviewsResponse, mapperReviewDefaultToReview, QUERY_ALL_REVIEWS} from "@/domain";

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
        await client.mutate({
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
        })

        // I could create one more layer of abstraction here like SERVICES and refactor this to be more readable
        const {data} = await client.query<AllReviewsResponse>({
            query: QUERY_ALL_REVIEWS,
        });

        return ReviewActions.loaded({data: mapperReviewDefaultToReview(data)});

    } catch (err) {
        return ReviewActions.loadError();
    }
}