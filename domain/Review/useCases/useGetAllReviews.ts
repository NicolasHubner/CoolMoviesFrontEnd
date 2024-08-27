import {EpicDependencies} from "@/types";
import {QUERY_ALL_REVIEWS} from "@/domain/Review/graphql/queries/getAllReviews";
import {ReviewActions} from "@/redux/slices/reviews/slice";
import {mapperReviewsDefaultToReview} from "@/domain/Review/services";
import {AllReviewsResponse} from "@/domain";

interface UseGetAllReviews extends EpicDependencies {
}

export const useGetAllReviews = async ({client}: UseGetAllReviews) => {
    try {
        const {data} = await client.query<AllReviewsResponse>({
            query: QUERY_ALL_REVIEWS,
        });

        return ReviewActions.loaded({data: mapperReviewsDefaultToReview(data)});
    } catch (err) {
        return ReviewActions.loadError();
    }
}