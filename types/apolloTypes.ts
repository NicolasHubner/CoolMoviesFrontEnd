import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export type CreateStoreOptions = {
    epicDependencies?: EpicDependencies;
};

export interface EpicDependencies {
    client: ApolloClient<NormalizedCacheObject>;
}

