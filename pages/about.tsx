
import Link from 'next/link'
import MainLayout from '../components/layout/MainLayout'
import { DarkLayout } from '../components/layout/DarkLayout'
import { ReactElement } from 'react'



const styleX = {
    color : '#7216F3',
    textDecoration : 'underline'
}

export default function AboutPage() {
  return (
    <>
    <MainLayout>
    <h1>This is about...a <Link href="/contact">dog</Link>, lo voy a <Link href="/pricing">comprar </Link></h1>

<div className={'grid'}>
  

  

  <Link href="/">
    Home
    </Link>

 
</div>
    </MainLayout>

      
        
      
    </>
  )
}

AboutPage.getLayout = function getLayout( page: ReactElement ) {

  return (
    <MainLayout>
      <DarkLayout>
      { page }
      </DarkLayout>
    </MainLayout>
  )

}