import {AllReviewsResponse, Review} from "@/domain";

export const mapperReviewDefaultToReview = (review: AllReviewsResponse): Review[] => {
    return review.allMovieReviews.nodes.map((review) => ({
        id: review.id,
        title: review.title,
        body: review.body,
        rating: review.rating,
        movieId: review.movieId,
        userReviewerId: review.userReviewerId,
    }))
}