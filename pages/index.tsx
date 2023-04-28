
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layout/MainLayout'


export default function Home() {
  return (
    <>
      <MainLayout>
      <h1>Welcome Home</h1>
        

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
        

         
        </div>
        <Link href="/about">
          About
        </Link>
      </MainLayout>
      
      
    </>
  )
}
