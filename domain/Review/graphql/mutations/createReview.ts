import {gql} from "@apollo/client";

export const CREATE_REVIEW_MUTATION = gql`
    mutation CreateMovieReview {
        createMovieReview(
            input: {
                movieReview: {
                    title: "A great Movie"
                    body: "We were watching this movie"
                    rating: 3
                    movieId: "b8d93229-e02a-4060-9370-3e073ada86c3"
                    userReviewerId: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a"
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