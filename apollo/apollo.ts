import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {API_BASE_URL} from "@/utils";

console.log('API_BASE_URL', API_BASE_URL);

const httpLink = createHttpLink({
    uri: `${API_BASE_URL}/graphql`,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});