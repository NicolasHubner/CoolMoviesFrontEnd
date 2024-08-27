import {EpicDependencies} from "@/types";
import {CreateUserResponse, MUTATION_CREATE_USER} from "@/domain/User/graphql/mutation";
import {User, UserActions} from "@/redux/slices/users/slice";

export interface CreateUserVariables {
    name: string
}

interface UseCreateReview extends EpicDependencies, CreateUserVariables {

}

export const useCreateUser = async ({
                                        client,
                                        name,
                                    }: UseCreateReview) => {
    try {
        const {data} = await client.mutate<CreateUserResponse>({
            mutation: MUTATION_CREATE_USER,
            variables: {
                name,
            },
        })

        return UserActions.userLoadedToEdit({data: data?.createUser.user as User});
    } catch (err) {
        return UserActions.loadError();
    }
}