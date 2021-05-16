import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4CSB9TMNWN"></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'G-4CSB9TMNWN');`}}>
                    </script>
                    <script data-ad-client="ca-pub-2938043404666421" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="google-site-verification" content="CU5g9PiCbtyvhI9HXwXV2P_rtS7m2JT14RG07ghVMA8" />

                    {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link> */}
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