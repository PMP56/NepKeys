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
                    <meta name="description" content="NepKeys is a free online Nepali typing practice site with Nepali Keyboard available on hand where you can learn nepali typing freely, calculate and improve your typing speed and track your progress with the inbuilt analytics system." />
                    <meta name="keywords" content="Nepkeys, nepali typing, nepali typing practice, online nepali typing, improve nepali typing, improve typing spped, keyboard, keyboard nepali, , nepali keyboard, practice nepali typing, online, Type in Nepali, Nepali Online Typing, Type Online Nepali, Type Nepali, Nepali Type, Nepali, typing speed, nepali typing speed, words per minuter" />
                    <meta name="google-site-verification" content="CU5g9PiCbtyvhI9HXwXV2P_rtS7m2JT14RG07ghVMA8" />
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