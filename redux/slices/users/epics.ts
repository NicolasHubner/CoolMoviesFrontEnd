import {Observable} from 'rxjs';
import {StateObservable} from "redux-observable";
import {RootState} from "@/store";
import {EpicDependencies} from "@/types";
import {UserActions, UserSliceActionsType} from "@/redux";
import {useCreateUser} from "@/domain";
import {filter, map, switchMap} from 'rxjs/operators';


export const addNewUser = (
    action$: Observable<UserSliceActionsType['addUser']>,
    state$: StateObservable<RootState>,
    {client}: EpicDependencies
) =>
    action$.pipe(
        filter(UserActions.addUser.match),
        switchMap(async ({payload: {data}}) =>
            useCreateUser({
                client,
                name: data.name,
            })
        )
    )

export const userEpics = addNewUser;