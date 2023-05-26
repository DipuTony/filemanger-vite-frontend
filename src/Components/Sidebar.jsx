import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const menu = [
    { id: 1, name: 'View Documents', path: '/view-documents', icon: 'https://cdn-icons-png.flaticon.com/512/1102/1102285.png' },
    { id: 2, name: 'Upload Documents', path: '/upload-documents', icon: 'https://cdn-icons-png.flaticon.com/512/1102/1102285.png' },
    { id: 3, name: 'Module Master', path: '/module-master', icon: 'https://cdn-icons-png.flaticon.com/512/1102/1102285.png' },
    { id: 3, name: 'User Management', path: '/manage-users', icon: 'https://cdn-icons-png.flaticon.com/512/1102/1102285.png' },
  ]

  return (
    <>
      <div className='bg-white border-r border-gray-200 h-full shadow-md w-full'>
        <div className='flex justify-center items-center mt-3'>
          <img src="https://cdn-icons-png.flaticon.com/512/187/187856.png" alt="Logo" className='h-6 mr-2 mt-1' />
          <p className='text-3xl font-bold text-gray-600 '>Stealth</p>
        </div>
        <p className='border-b-2 mt-5'></p>

        {
          menu.map((item) => (

            <Link to={item.path} className='font-medium'>
              <div key={item.id} className='bg-indigo-100 m-5 flex justify-center py-2 rounded-sm'>
                <img src={item.icon} alt="Logo" className='h-6 mr-3' />
                {item.name}
              </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Sidebar