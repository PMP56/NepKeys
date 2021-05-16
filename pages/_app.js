import '../styles/globals.css'
import Head from 'next/head'

import { TextProvider } from '../components/TextContext'

function MyApp({ Component, pageProps }) {
  return (
    <TextProvider>
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <meta key="description" name="description" content="NepKeys is an online Nepali typing practice site with Nepali Keyboard available where you can practice nepali typing online, calculate and improve your typing speed and track your progress with the inbuilt analytics system." />
        <meta key="keywords" name="keywords" content="nepkeys, nepali typing, nepali typing practice, online typing, online nepali typing, type in nepali, type nepali, nepali type, typing tutor, nepali typeshala, improve nepali typing, fast nepali typing, improve typing spped, typing test, nepali typing for begineers, typing jobs, keyboard nepali, virtual keyboard, nepali keyboard, practice nepali typing, online, type in nepali, nepali online typing, type online nepali, type nepali, nepali type, nepali, typing speed, nepali typing speed, words per minuter, nepali typing jobs, typing freelancers" />
        <title>Nepali Keyboard and Nepali Typing Practice Online - NepKeys</title>
        <link rel="icon" href="/joy.ico" />
        <link rel="canonical" href="https://www.nepkeys.site/" />
      </Head>
      <Component lang="Nepali" fonts={{ "text": "40px", "upperKey": "19px", "lowerKey": "24px" }}  {...pageProps} />
    </TextProvider>
  )
}

export default MyApp
