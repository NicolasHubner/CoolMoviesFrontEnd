import {gql} from "@apollo/client";

export interface CreateReviewInput {
    title: string;
    body: string;
    rating: number;
    movieId: string;
    userReviewerId: string;
}

export interface CreateReviewResponse {
    createMovieReview: {
        movieReview: {
            nodeId: string;
            id: string;
            title: string;
            body: string;
            rating: number;
            movieId: string;
            userReviewerId: string;
        }
    }
}

export const CREATE_REVIEW_MUTATION = gql`
    mutation CreateMovieReview(
        $title: String!
        $body: String!
        $rating: Int!
        $movieId: UUID!
        $userReviewerId: UUID!
    ) {
        createMovieReview(
            input: {
                movieReview: {
                    title: $title
                    body: $body
                    rating: $rating
                    movieId: $movieId
                    userReviewerId: $userReviewerId
                }
            }
        ) {
            movieReview {
                nodeId
                id
                title
                body
                rating
                movieId
                userReviewerId
            }
        }
    }
`;
