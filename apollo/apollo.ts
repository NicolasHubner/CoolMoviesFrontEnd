import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {API_BASE_URL} from "@/utils";

export const httpLink = createHttpLink({
    uri: `/graphql`,
});

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});