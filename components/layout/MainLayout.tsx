import Head from "next/head"
import  {FC, PropsWithChildren} from "react"
import { Navbar } from "../Navbar"
import { Inter } from 'next/font/google'
import styles from "./Layout.module.css"

const inter = Inter({ subsets: ['latin'] })

const MainLayout:FC<PropsWithChildren> = ({ children }) => {
    return (
      <>
        <Head>
          <title>Create ABOUT App</title>
          <meta name="description" content="about content" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
          <Navbar />
          { children }
        </main>
      </>
    );
}

export default MainLayout;