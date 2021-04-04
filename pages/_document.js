import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name='keywords' content='practice nepali typing online, nepali typing, nepali, typing, online' />
                    <meta name="description" content="Practice Nepali Typing Online | Increase your nepali typing skills" />
                    <meta name="google-site-verification" content="MWnLOz_sUZATNS8FaKpTN3Avn-hfoSv9MFaWJ_WnFKo" />
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