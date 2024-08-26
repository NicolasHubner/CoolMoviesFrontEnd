import React, {useState} from "react";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {createStore} from "../redux";
import {EnhancedStore} from "@reduxjs/toolkit";


const useApolloClientApi = () => {
    const [store, setStore] = useState<EnhancedStore | null>(null);

    React.useEffect(() => {
        const client = new ApolloClient({
            cache: new InMemoryCache(),
            uri: '/graphql',
        });

        const store = createStore({ epicDependencies: { client } });
        setStore(store);
    }, []);

    return store;
}

export  {useApolloClientApi};