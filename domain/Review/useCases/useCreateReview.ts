import {EpicDependencies} from "@/types";
import {CREATE_REVIEW_MUTATION, CreateReviewResponse} from "@/domain/Review/graphql/mutations/createReview";
import {ReviewActions} from "@/redux";
import {
    AllReviewsResponse,
    mapperReviewsDefaultToReview,
    QUERY_ALL_REVIEWS
} from "@/domain";
import {CreateUserResponse, MUTATION_CREATE_USER} from "@/domain/User/graphql/mutation";
import {Alert} from "@mui/material";

export interface CreateReview {
    title: string;
    body: string;
    rating: number;
    movieId: string;
    userName: string;
}

interface UseCreateReview extends EpicDependencies, CreateReview {
}

export const useCreateReview = async ({
                                          client,
                                          title,
                                          body,
                                          rating,
                                          movieId,
                                          userName
                                      }: UseCreateReview) => {
    try {
        const {data: dataUserCreated} = await client.mutate<CreateUserResponse>({
            mutation: MUTATION_CREATE_USER,
            variables: {
                name: userName,
            },
        })

        await client.mutate({
            mutation: CREATE_REVIEW_MUTATION,
            variables: {
                title,
                body,
                rating,
                movieId,
                userReviewerId: dataUserCreated?.createUser.user.id ?? '',
            },
        })


        // I could create one more layer of abstraction here like SERVICES and refactor this to be more readable
        const {data} = await client.query<AllReviewsResponse>({
            query: QUERY_ALL_REVIEWS,
            fetchPolicy: 'no-cache',
        });

        return ReviewActions.loadedSuccess({data: mapperReviewsDefaultToReview(data)});
    } catch (err) {
        window.alert('Error creating review');
        return ReviewActions.loadError();
    }
}