import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import MainPage from './Pages/MainPage'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ViewDocuments from './Pages/ViewDocuments'
import Dashboard from './Pages/Dashboard'
import UserManagement from './Pages/UserManagement'
import UploadDocuments from './Pages/UploadDocuments'
import ViewModuleList from './Pages/ModuleMaster/ViewModuleList'
import Test from './Pages/TEST/Test'
import ProfileIndex from './Pages/Profile/ProfileIndex'

const App = () => {
  const [showHideMenu, setShowHideMenu] = useState()

  return (
    <>


      <div className='grid grid-cols-12 bg-gray-200'>
        <div className={`md:col-span-2 absolute md:relative md:block w-[80%] mt-14 h-screen md:mt-0 md:w-full`}>
          <Sidebar />
        </div>
        <div className='md:col-span-10 col-span-12 m-5'>
          <Header />
          <p className='mt-20'></p>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/old" element={<MainPage />} />
            <Route path="/view-documents" element={<ViewDocuments />} />
            <Route path="/upload-documents" element={<UploadDocuments />} />
            <Route path="/module-master" element={<ViewModuleList />} />
            <Route path="/manage-users" element={<UserManagement />} />
            <Route path="/profile" element={<ProfileIndex />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>

      </div>

    </>
  )
}

export default App