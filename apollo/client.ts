import React, {useState} from "react";
import {EnhancedStore} from "@reduxjs/toolkit";
import {createStore} from "@/store";
import {apolloClient} from "@/apollo/apollo";


const useApolloClientApi = () => {
    const [store, setStore] = useState<EnhancedStore | null>(null);

    React.useEffect(() => {
        const store = createStore({ epicDependencies: { client: apolloClient   } });

        setStore(store);
    }, []);

    return store;
}

export  {useApolloClientApi};