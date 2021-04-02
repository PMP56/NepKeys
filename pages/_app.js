import '../styles/globals.css'

import { TextProvider } from '../components/TextContext'

function MyApp({ Component, pageProps }) {
  return (
    <TextProvider>
      <Component {...pageProps} />
    </TextProvider>
  )
}

export default MyApp
