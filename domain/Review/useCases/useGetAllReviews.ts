import {EpicDependencies} from "@/types";
import {QUERY_ALL_REVIEWS} from "@/domain/Review/graphql/queries/getAllReviews";
import {ReviewActions} from "@/redux/slices/reviews/slice";

interface UseGetAllReviews extends EpicDependencies {
}

export const useGetAllReviews = async ({client}: UseGetAllReviews) => {
    try {
        const result = await client.query({
            query: QUERY_ALL_REVIEWS,
        });

        return ReviewActions.loaded({data: result.data});
    } catch (err) {
        return ReviewActions.loadError();
    }
}