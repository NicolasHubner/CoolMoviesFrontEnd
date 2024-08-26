import {gql} from "@apollo/client";

export const QUERY_ALL_MOVIES = gql`
    query AllMovies {
        allMovies {
            nodes {
                id
                imgUrl
                movieDirectorId
                userCreatorId
                title
                releaseDate
                nodeId
                movieReviewsByMovieId {
                    nodes {
                        nodeId
                        rating
                        title
                        rating
                        userReviewerId
                        commentsByMovieReviewId {
                            nodes {
                                userId
                                nodeId
                                id
                                title
                                body
                            }
                        }
                    }
                }
                userByUserCreatorId {
                    id
                    name
                    nodeId
                }
            }
        }
    }
`;
