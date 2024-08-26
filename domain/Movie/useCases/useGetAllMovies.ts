import {EpicDependencies} from "@/types";
import {QUERY_ALL_MOVIES, QUERY_ALL_MOVIES_REVIEWS} from "../graphql";
import {MovieActions} from "@/redux/slices/movies/slice";

interface UseGetAllMovies extends EpicDependencies {
}

export const useGetAllMovies = async ({client}: UseGetAllMovies) => {
    try {
        const result = await client.query({
            query: QUERY_ALL_MOVIES_REVIEWS,
        });

        return MovieActions.loaded({data: result.data});
    } catch (err) {
        return MovieActions.loadError();
    }
}