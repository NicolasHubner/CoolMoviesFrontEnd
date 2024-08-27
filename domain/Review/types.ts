export interface Review {
    id?: string;
    title: string;
    body: string;
    rating: number;
    movieId: string;
    userReviewerId?: string;
}

export interface UpdateReview extends Review {
    reviewId: string;
}


export interface ReviewDefault extends Review {
    userByUserReviewerId?: {
        name: string;
        id: string;
    };
}

export interface AllReviewsResponse {
    allMovieReviews: {
        totalCount: number;
        nodes: {
            nodeId: string;
            id: string;
            title: string;
            body: string;
            rating: number;
            movieId: string;
            userReviewerId: string;
            userByUserReviewerId: {
                name: string;
                id: string;
            }
        }[]
    };
}