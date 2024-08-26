import {gql} from "@apollo/client";

export interface AllMoviesReviewsResponse {
    allMovieReviews: {
        nodes: {
            id: string,
            rating: number,
            movieId: string,
            title: string,
            userReviewerId: string
        }[]
    }
}

export const QUERY_ALL_MOVIES_REVIEWS = gql`
    query AllMoviesReviews {
  allMovieReviews {
    nodes {
      id
      movieId
      title
      rating
      userReviewerId
        userByUserReviewerId {
            name
            id
        }
    }
  }
    }
`;
