import {gql} from "@apollo/client";

export const QUERY_ALL_REVIEWS = gql`
    query AllMovieReviews {
        allMovieReviews {
            totalCount
            nodes {
                nodeId
            id
            title
            body
            rating
            movieId
            userReviewerId
            userByUserReviewerId {
                name
                id
            }
            movieByMovieId {
                nodeId
                id
                title
                movieDirectorId
                userCreatorId
                releaseDate
                imgUrl
                }
            }
        }
    }
`;