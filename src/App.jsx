import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import UploadDocuments from './Pages/UploadDocuments'
import ViewModuleList from './Pages/ModuleMaster/ViewModuleList'
import ProfileIndex from './Pages/Profile/ProfileIndex'
import ManageDocumentIndex from './Pages/ManageDocuments/ManageDocumentIndex'
import LoginIndex from './Pages/Auth/LoginIndex'
import EmployeeRoute from './Components/Route/EmployeeRoute'
import Logout from './Pages/Auth/Logout'
import ShowHeader from './Components/Route/ShowHeader'
import AdminRoute from './Components/Route/AdminRoute'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import IsLoginRoute from './Components/Route/IsLoginRoute'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {

  return (
    <>
      <Toaster />

      <Routes>
        <Route element={<ShowHeader />}>
          {/* Only Employee Can access This */}
          <Route element={<EmployeeRoute />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/upload-documents" element={<UploadDocuments />} />

          </Route>
          {/* Only Admin Can assess these routes */}
          <Route element={<AdminRoute />}>
            <Route exact path="/admin" element={<AdminDashboard />} />
            <Route exact path="/manage-users" element={<ViewModuleList />} />
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