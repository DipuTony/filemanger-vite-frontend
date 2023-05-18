import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className='bg-white border-r border-gray-200 h-full shadow-md'>
        <div className='flex justify-center items-center mt-3'>
          <img src="https://cdn-icons-png.flaticon.com/512/187/187856.png" alt="Logo" className='h-6 mr-2 mt-1' />
          <p className='text-3xl font-bold text-gray-600 '>Stealth</p>
        </div>
        <p className='border-b-2 mt-5'></p>

        <div className='bg-indigo-100 m-5 flex justify-center py-2 rounded-sm'>
          <img src="https://cdn-icons-png.flaticon.com/512/1102/1102285.png" alt="Logo" className='h-6 mr-3'/>
          <p className='font-medium'>File Manager</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar