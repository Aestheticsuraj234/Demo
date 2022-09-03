import '../styles/globals.css'
import Header from '../components/Header';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

  return(<ThemeProvider attribute="class">
     <Header/>
     <Component {...pageProps} />
  </ThemeProvider>

)}

export default MyApp
