import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, XCircle, LayoutDashboard, FileStack, FileUp, Database, Users, UserCog, KeyRound, Container } from 'lucide-react'


const Sidebar = () => {

  const menu = [
    { id: 1, name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { id: 2, name: 'View Documents', path: '/view-documents', icon: FileStack },
    { id: 3, name: 'Upload Documents', path: '/upload-documents', icon: FileUp },
    { id: 4, name: 'Module Master', path: '/module-master', icon: Database },
    { id: 5, name: 'User Management', path: '/manage-users', icon: Users },
    { id: 5, name: 'OLD', path: '/old', icon: Users },
    { id: 5, name: 'test', path: '/oldtest', icon: Users },
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
                  <Link to={item.path}
                    className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="mx-2 text-sm font-medium capitalize">{item.name}</span>
                  </Link>
                ))
              }
            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white ">Personal</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <BellRing className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Notifications</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <KeyRound className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Password</span>
              </a>
              <Link to="/profile"
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
                <UserCog className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Profile</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>



    </>
  )
}

export default Sidebar