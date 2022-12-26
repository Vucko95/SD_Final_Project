import '../styles/globals.css'
import '../styles/Footer.module.css'
import '../styles/Home.module.css'
// import cookie from "js-cookie";

import Layout from '../comps/Layout'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  
  return(
    
    <Layout>
     <Component {...pageProps} />
    </Layout>
    
    
    ) 
}
