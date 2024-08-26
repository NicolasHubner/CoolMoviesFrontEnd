export interface ReviewDefault {
    id: string;
    title: string;
    body: string;
    rating: number;
    movieId: string;
    userReviewerId: string;
    userByUserReviewerId: {
        name: string;
        id: string;
    };
}