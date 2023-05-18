import React from 'react'
import { GrFormAdd } from 'react-icons/gr';
const Header = () => {
    return (
        <>
            <div className='bg-white w-full'>
                <div className='flex justify-between mx-10 m-3'>
                    <p className='text-gray-600 text-2xl font-semibold'>File Manager</p>
                    <button className='bg-[#824DE8] text-white rounded px-5 py-2 font-semibold flex'> <GrFormAdd color="red" size={25} /> Upload</button>
                </div>
            </div>
        </>
    )
}

export default Header