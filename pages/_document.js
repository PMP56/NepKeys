import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="keywords" content="Nepkey, nepali keyboard, practice nepali typing, online" />
                    <meta name="description" content="NepKeys is a free online Nepali typing practice site which provides you a better environment to learn typing and analytics which help you to track your progess." />
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