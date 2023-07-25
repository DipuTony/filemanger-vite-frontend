import { Copy } from 'lucide-react'
import React from 'react'
import ChangePassword from './ChangePassword'
import UserProfile from './UserProfile'

const ProfileIndex = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-x-5'>


                <div className='col-span-8 border bg-white rounded-lg p-5'>
                    <p className='font-semibold text-lg'>Edit Profile</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, fugit?</p>
                    <div>
                        <UserProfile />
                    </div>
                </div>

                <div className='col-span-4 border bg-white rounded-lg p-5'>
                    <p className='font-semibold text-lg'>Change Password</p>
                    <p className='text-sm text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, fugit?</p>
                    <div>
                        <ChangePassword />
                    </div>
                </div>

                <div className='col-span-8 border bg-white rounded-lg p-5 relative mt-5'>
                    <p className='font-semibold text-lg'>Token Key</p>
                    <p className='text-sm text-gray-600'>This token key use for internal communication with Document Management System.</p>
                    <div className='whitespace-nowrap absolute right-5 top-4'>
                        <span className='font-semibold'>Last Update : </span> <span className='font-semibold text-purple-600'>Fri, 12 April 2023, 10:20 AM</span>
                    </div>

                    <div className=''>
                        <div className='flex w-full items-end justify-between gap-x-5'>
                            <div className='w-full'>
                                <p className='font-semibold'>Your Token</p>
                                <p className='flex justify-between items-center w-full border border-gray-700 py-1 rounded shadow px-2 bg-gray-200 text-gray-700 font-semibold'>XXJIJSIJIJ7878787
                                <Copy size={15} className="cursor-pointer" />
                                </p>
                            </div>
                            <div>
                                <button className='px-4 py-1 rounded shadow-md bg-gray-700 hover:bg-gray-800 text-white'>Revoke</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileIndex