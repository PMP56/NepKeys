import '../styles/globals.css'
import Head from 'next/head'

import { TextProvider } from '../context/TextContext'
import { SettingProvider } from '../context/SettingContext'

function MyApp({ Component, pageProps }) {
  return (
    <SettingProvider>
      <TextProvider>
        <Head>
          <meta name='viewport' content="width=device-width, initial-scale=1" />
          <meta key="description" name="description" content="NepKeys is an online Nepali typing practice, typing tutor and typing test site with different layouts of traditional Nepali keyboard that helps you improve your Nepali typing skill with the analytics tool integrated inside the website. It is absolutely free to use and guides you along your journey of learning fast and accuate typing." />
          <meta key="keywords" name="keywords" content="nepkeys, nepali typing, nepali typing online, nepali typing practice, nepali typing practice online, practice nepali typing, practice nepali typing online, online typing practice, nepali typing tutor, nepali typing tutor online, nepali typeshala, easy nepali typing, easy nepali typing practice, sajilo nepali typing, sajilo nepali typing online, online nepali typing, type in nepali, type nepali, devanagari typing, devanagari typing practice, improve nepali typing, fast nepali typing, improve typing speed, typing test, nepali typing test, nepali typing for begineers, typing jobs, keyboard nepali, nepali keyboard, nepali keyboard layout, nepali online typing, type online nepali, nepali characters, nepali typing speed" />
          <title>NepKeys - Nepali Typing Practice Online, Typing Tutor and Typing Test</title>
          <link rel="icon" href="/nepkeys.svg" />
          <link rel="canonical" href="https://www.nepkeys.site/" />
        </Head>
        <Component lang="Nepali" fonts={{ "text": "40px", "upperKey": "19px", "lowerKey": "24px" }}  {...pageProps} />
      </TextProvider>
    </SettingProvider>
  )
}

export default MyApp
