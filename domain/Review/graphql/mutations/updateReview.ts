import {gql} from "@apollo/client";

export const UPDATE_REVIEW_MUTATION = gql`
    mutation UpdateMovieReviewById(
        $id: UUID!,
        $title: String!,
        $body: String!,
        $rating: Int!,
        $movieId: UUID!
    ) {
        updateMovieReviewById(
            input: {
                movieReviewPatch: {
                    title: $title
                    body: $body
                    rating: $rating
                    movieId: $movieId
                }
                id: $id
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