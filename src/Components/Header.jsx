import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { useEffect } from 'react';

const Header = (props) => {
    const [showHideMenu, setShowHideMenu] = useState(false)

    const handleMenu = () => {
        setShowHideMenu(!showHideMenu)
    }
    useEffect(()=>{
        props.handleMenu(showHideMenu)
    },[showHideMenu])

    return (
        <>
            <div className='bg-white w-full'>
                <div onClick={() => handleMenu()} className='absolute block md:hidden ml-2 mt-1 hover:bg-gray-200 cursor-pointer'>
                    <FiMenu size={25} />
                </div>
                <div className='flex justify-between mx-10 m-3'>
                    <p className='text-gray-600 text-2xl font-semibold'>File Manager</p>
                    {/* <button className='bg-[#824DE8] text-white rounded px-3 md:px-5 py-2 font-semibold flex text-sm md:text-base'> <IoIosAdd className='-mt-0.5' color="white" size={25} /> Upload</button> */}
                </div>
            </div>
        </>
    )
}

export default Header