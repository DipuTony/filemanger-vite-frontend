import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { useEffect } from 'react';

const Header = (props) => {



    return (
        <>
            <div className='relative flex justify-center'>

                <div className='bg-white border shadow-lg w-full absolute rounded-md'>
                    <div className='flex justify-between mx-10 m-3'>
                        <p className='text-gray-600 text-2xl font-semibold'>File Manager</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header