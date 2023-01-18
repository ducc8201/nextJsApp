import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next/'
import type { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout <P = {}, IP = P> = NextPage<P,IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp ({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp