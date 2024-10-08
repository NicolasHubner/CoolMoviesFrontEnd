import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React, {FC} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import Head from 'next/head';
import {useApolloClientApi} from "@/apollo";
import {NavBar} from "@/components/NavBar";
import {ThemeProvider} from "@mui/material/styles";
import {themeCustom} from "@/styles/theme";

const App: FC<AppProps> = ({Component, pageProps}) => {

    const store = useApolloClientApi();

    if (!store) return <>{'Loading...'}</>;


    return (
        <>
            <Head>
                <title>{'Coolmovies Frontend'}</title>
                <meta charSet='UTF-8'/>
                <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            </Head>
            <ReduxProvider store={store}>
                <ThemeProvider theme={themeCustom}>
                    <NavBar/>

                    <Component {...pageProps} />

                </ThemeProvider>
            </ReduxProvider>
        </>
    );
};

export default App;
