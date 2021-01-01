import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from '../i18n';
import { useStore } from '../store/store';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <>
            <Head>
                <title>My app</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=12.0, minimum-scale=1"
                />
            </Head>

            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default appWithTranslation(App);
