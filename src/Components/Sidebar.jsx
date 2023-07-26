import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LayoutDashboard, FileStack, FileUp, Database, Users, UserCog, KeyRound, Container } from 'lucide-react'


const Sidebar = () => {

  const menu = [
    { id: 1, name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { id: 2, name: 'Manage Documents', path: '/manage-documents', icon: FileStack },
    { id: 3, name: 'Upload Documents', path: '/upload-documents', icon: FileUp },
    { id: 4, name: 'Module Master', path: '/module-master', icon: Database },
    { id: 5, name: 'User Management', path: '/manage-users', icon: Users },
    { id: 7, name: 'test', path: '/test', icon: Users },
    { id: 8, name: 'Transaction Logs', path: '/test', icon: Users },
    { id: 9, name: 'Profile', path: '/profile', icon: UserCog },
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
                menu.map((item) => (
                  <NavLink to={item.path}
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