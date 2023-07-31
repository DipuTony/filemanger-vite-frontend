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
import AdminRoute from './Components/Route/AdminRoute'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import IsLoginRoute from './Components/Route/IsLoginRoute'

const App = () => {

  return (
    <>


      <Routes>
        <Route element={<ShowHeader />}>
          {/* Only Employee Can access This */}
          <Route element={<EmployeeRoute />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/module-master" element={<ViewModuleList />} />
            <Route exact path="/manage-users" element={<UserManagement />} />
            <Route exact path="/test" element={<Test />} />
          </Route>
          {/* Only Admin Can assess these routes */}
          <Route element={<AdminRoute />}>
            <Route exact path="/admin" element={<AdminDashboard />} />
          </Route>
          {/* Any LoggedIn user can access these routes */}
          <Route element={<IsLoginRoute />}>
            <Route exact path="/profile" element={<ProfileIndex />} />
            <Route exact path="/manage-documents" element={<ManageDocumentIndex />} />
          </Route>

        </Route>

        <Route exact path="/login" element={<LoginIndex />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>

    </>
  )
}

export default App