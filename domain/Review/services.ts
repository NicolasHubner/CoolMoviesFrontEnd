import {AllReviewsResponse, Review} from "@/domain";

export const mapperReviewsDefaultToReview = (reviews: AllReviewsResponse): Review[] => {
    return reviews.allMovieReviews.nodes.map((review) => ({
        id: review.id,
        title: review.title,
        body: review.body,
        rating: review.rating,
        movieId: review.movieId,
        userReviewerId: review.userReviewerId,
        user: {
            id: review.userByUserReviewerId.id,
            name: review.userByUserReviewerId.name
        },
        movie: {
            id: review.movieByMovieId.id,
            title: review.movieByMovieId.title,
            movieDirectorId: review.movieByMovieId.movieDirectorId,
            userCreatorId: review.movieByMovieId.userCreatorId,
            releaseDate: review.movieByMovieId.releaseDate,
            imgUrl: review.movieByMovieId.imgUrl
        }
    }))
}