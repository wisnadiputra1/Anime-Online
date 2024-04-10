
import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'


const BaseLayout = () => {
  return (
    <main className="bg-black h-screen">
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default BaseLayout