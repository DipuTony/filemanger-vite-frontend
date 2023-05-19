import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import MainPage from './Pages/MainPage'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const [showHideMenu, setShowHideMenu] = useState()

  return (
    <>

      <div className='grid grid-cols-12'>
        <div className={`md:col-span-2 ${showHideMenu ? 'block' : 'hidden'} absolute md:relative md:block w-[80%] mt-14 h-screen md:mt-0 md:w-full`}>
          <Sidebar />
        </div>
        <div className='md:col-span-10 col-span-12'>
          <Header handleMenu={(e) => setShowHideMenu(e)} />
          <MainPage />

        </div>

      </div>

    </>
  )
}

export default App