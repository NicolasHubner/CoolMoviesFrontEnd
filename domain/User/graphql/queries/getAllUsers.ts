import {gql} from "@apollo/client";

export const QUERY_ALL_USERS = gql`
    query AllUsers {
    allUsers {
        nodes {
            name
            nodeId
            id
            movieReviewsByUserReviewerId {
                totalCount
                nodes {
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
        totalCount
    }
}
`