/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const styledComponentsSheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: any) => (props: any) => styledComponentsSheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {styledComponentsSheet.getStyleElement()}
                    </React.Fragment>
                ),
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* Step 5: Output the styles in the head  */}
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
