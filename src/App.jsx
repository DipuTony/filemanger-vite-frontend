import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import UserManagement from './Pages/UserManagement'
import UploadDocuments from './Pages/UploadDocuments'
import ViewModuleList from './Pages/ModuleMaster/ViewModuleList'
import Test from './Pages/TEST/Test'
import ProfileIndex from './Pages/Profile/ProfileIndex'
import ManageDocumentIndex from './Pages/ManageDocuments/ManageDocumentIndex'
import LoginIndex from './Pages/Auth/LoginIndex'
import EmployeeRoute from './Components/Route/EmployeeRoute'
import Logout from './Pages/Auth/Logout'
import ShowHeader from './Components/Route/ShowHeader'

const App = () => {

  return (
    <>


      {/* <div className='grid grid-cols-12 bg-gray-100 '> */}

        <Routes>
          <Route element={<EmployeeRoute />}>
            <Route element={<ShowHeader />}>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/manage-documents" element={<ManageDocumentIndex />} />
              <Route exact path="/upload-documents" element={<UploadDocuments />} />
              <Route exact path="/module-master" element={<ViewModuleList />} />
              <Route exact path="/manage-users" element={<UserManagement />} />
              <Route exact path="/profile" element={<ProfileIndex />} />
              <Route exact path="/test" element={<Test />} />
            </Route>
          </Route>

          <Route exact path="/login" element={<LoginIndex />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>

      {/* </div> */}

    </>
  )
}

export default App