import '../styles/globals.css'
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

type NextWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component : NextWithLayout
} 

export default function App({ Component, pageProps }:AppPropsWithLayout) {

const getLayout = Component.getLayout || ((page) => page);

  //return <Component {...pageProps} />

return getLayout(<Component {...pageProps} />)

}
