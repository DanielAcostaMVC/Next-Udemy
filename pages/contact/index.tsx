import Link from 'next/link'
import MainLayout from '../../components/layout/MainLayout'


const MyNuevo = () => {
    return (
        <MainLayout>  
            <h1>Este es mi nuevo contactoXX <Link href="../about"> acerca de 🙄</Link>, mejor me voy a <Link href="../"> casa 🏠</Link>
            </h1>   
        </MainLayout>
        
    )
}

export default MyNuevo;