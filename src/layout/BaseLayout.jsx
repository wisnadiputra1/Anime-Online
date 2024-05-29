import {useEffect, useState} from 'react'
import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
import PopUp from "../components/PopUp";



const BaseLayout = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const [timeLeft, setTimeLeft] = useState(7);

   //untuk popup di awal
  useEffect(() =>{
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setShowPopUp(false);
    },7000);


    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    } 
  },[])

  return (
    <main className="bg-black h-screen">
      {
          showPopUp ? (
            <div className="fixed z-50 bg-black w-full h-full bg-opacity-50 flex items-center justify-center">
              <PopUp timeLeft={timeLeft} />
            </div>
          )
          : null
      }
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default BaseLayout