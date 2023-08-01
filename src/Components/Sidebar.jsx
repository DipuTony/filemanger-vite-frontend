import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LayoutDashboard, FileStack, FileUp, Database, Users, UserCog, KeyRound, Container, LogOut } from 'lucide-react'
import AuthIndex from './Auth/AuthIndex'


const Sidebar = () => {

  const { userIs, isLoggedIn } = AuthIndex()

  const menu = [
    { id: 1, name: 'Dashboard', path: '/', icon: LayoutDashboard, access: ['user'] },
    { id: 2, name: 'Dashboard', path: '/admin', icon: LayoutDashboard, access: ['admin'] },
    { id: 3, name: 'Manage Documents', path: '/manage-documents', icon: FileStack, access: ['admin','user'] },
    { id: 4, name: 'Upload Documents', path: '/upload-documents', icon: FileUp, access: ['user'] },
    { id: 5, name: 'User Management', path: '/manage-users', icon: Users, access: ['admin'] },
    { id: 6, name: 'Transaction Logs', path: '/test', icon: Users, access: ['admin', 'user'] },
    { id: 7, name: 'Profile', path: '/profile', icon: UserCog, access: ['admin', 'user'] },
    { id: 8, name: 'Logout', path: '/logout', icon: LogOut, access: ['admin', 'user'] },
  ]

  return (
    <>
      <aside className="flex h-screen w-full flex-col overflow-y-auto border-r bg-black px-5 py-8">
        <div className='text-white text-center border p-2 rounded'>

          <p className='text-white text-2xl font-bold'>Document</p>
          <p className='font-bold text-lg'>Management System</p>
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              {
                menu.map((item, index) => (
                  item?.access?.includes(userIs) &&
                  <NavLink key={index} to={item.path}
                    className={({ isActive }) => isActive
                      ? 'flex transform items-center rounded-lg px-3 py-2 text-gray-800 transition-colors duration-300 bg-gray-50 hover:text-gray-700'
                      : 'flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700'}>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="mx-2 text-sm font-medium capitalize">{item.name}</span>
                  </NavLink>
                ))
              }
            </div>

            {/* <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white ">Personal</label>


              <Link to="/profile"
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
                <UserCog className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Profile</span>
              </Link>
            </div> */}
          </nav>
        </div>
      </aside>



    </>
  )
}

export default Sidebar