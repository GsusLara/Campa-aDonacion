import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Context } from "../store/appContext";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="icon" href="/help.ico" />
                    <meta name="author" content="fulfill dream" />
                    <meta name="robots" content="index, follow" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument