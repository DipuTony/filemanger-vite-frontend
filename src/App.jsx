import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import MainPage from './Pages/MainPage'
import reactLogo from './assets/react.svg'

const App = () => {
  return (
    <>

      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <div className='col-span-10'>
          <Header />
          <MainPage />

        </div>

      </div>

    </>
  )
}

export default App