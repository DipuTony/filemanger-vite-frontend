import axios from 'axios'
import { CheckCircle, Copy, XCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ApiList from '../../Components/ApiLIst'
import AuthIndex from '../../Components/Auth/AuthIndex'
import ChangePassword from './ChangePassword'
import UserProfile from './UserProfile'

const ProfileIndex = () => {

    const [userProfileData, setUserProfileData] = useState()
    const { isLoggedIn, userIs } = AuthIndex();

    const { api_myProfile, header, apiRevokeAccessKey } = ApiList();

    const fetchProfileData = () => {

        axios.post(api_myProfile, {}, header)
            .then((res) => {
                if (res.data.status) {
                    setUserProfileData(res.data.data)
                } else {
                    console.log("Error While getting profile Data")
                }
            })
            .catch((error) => {
                console.log("Error while getting profile data", error)
            })
    }
    console.log("userProfileData", userProfileData)

    useEffect(() => {
        fetchProfileData()
    }, [])

    const Right = () => { return (<CheckCircle color='green' className='mt-1 ml-1' size={16} />) };
    const Wrong = () => { return (<XCircle color='red' className='mt-1 ml-1' size={17} />) };

    const handleRevokeBtn = () => {
        axios.post(apiRevokeAccessKey, {}, header)
            .then((res) => {
                if (res.data.status) {
                    // setUserProfileData(res.data.data)
                    fetchProfileData();
                    console.log("Regenerate Successful")
                } else {
                    console.log("Error While Regenerating secrete key")
                }
            })
            .catch((error) => {
                console.log("Error While Regenerating secrete key", error)
            })
    }

    // / Create a Date object from the timestamp
    const dateObj = new Date(userProfileData?.updated_at);

    // Get the various components of the date and time
    // Define options for date and time formatting
    const dateOptions = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    // Format the date and time
    const formattedDate = dateObj.toLocaleString('en-US', dateOptions);
    const formattedTime = dateObj.toLocaleString('en-US', timeOptions);

    // Combine date and time into the final format
    const formattedDateTime = `${formattedDate}, ${formattedTime}`;


    return (
        <>
            <div className='grid grid-cols-12 gap-5'>

                <div className='col-span-8 border bg-white rounded-lg p-5 relative mt-5'>
                    <p className='font-semibold text-lg'>Token Key</p>
                    <p className='text-sm text-gray-600'>This token key use for internal communication with Document Management System.</p>
                    <div className='whitespace-nowrap absolute right-5 top-4'>
                        <span className='font-semibold'>Last Update : </span> <span className='font-semibold text-purple-600'>{formattedDateTime}</span>
                    </div>

                    <div className=''>
                        <div className='flex w-full items-end justify-between gap-x-5'>
                            <div className='w-full'>
                                <p className='font-semibold'>Your Token</p>
                                <p className='flex justify-between items-center w-full border border-gray-700 py-1 rounded shadow px-2 bg-gray-200 text-gray-700 font-semibold'>{userProfileData?.secret_key}
                                    <Copy size={15} className="cursor-pointer" />
                                </p>
                            </div>
                            <div>
                                <button onClick={handleRevokeBtn} type='button' className='px-4 py-1 rounded shadow-md bg-gray-700 hover:bg-gray-800 text-white'>Revoke</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-span-4 border bg-white rounded-lg p-5 relative mt-5'>
                    <p className='font-semibold text-lg'>Permission Details</p>
                    {/* <p className='text-sm text-gray-600'>User given permission and details.</p> */}
                    <div className='whitespace-nowrap absolute right-5 top-4'>
                        {/* <span className='font-semibold'>Last Update : </span> <span className='font-semibold text-purple-600'>Fri, 12 April 2023, 10:20 AM</span> */}
                    </div>

                    <p className='font-semibold'>Role : <span className='capitalize text-blue-600 font-semibold'>{userIs}</span></p>
                    <p className='font-semibold border-b text-left py-1'>Given Permission</p>
                    <div className='flex justify-evenly my-1'>
                        <p className='flex font-semibold text-base'>Read : <span> {userProfileData?.read_access == 1 ? <Right /> : <Wrong />}</span></p>
                        <p className='flex font-semibold text-base'>Write : <span>{userProfileData?.write_access == 1 ? <Right /> : <Wrong />}  </span></p>
                        <p className='flex font-semibold text-base'>Delete : <span>{userProfileData?.delete_access == 1 ? <Right /> : <Wrong />}</span></p>
                    </div>


                </div>


                <div className='col-span-8 border bg-white rounded-lg p-5'>
                    <p className='font-semibold text-lg'>Edit Profile</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, fugit?</p>
                    <div>
                        <UserProfile userProfileData={userProfileData} />
                    </div>
                </div>

                <div className='col-span-4 border bg-white rounded-lg p-5'>
                    <p className='font-semibold text-lg'>Change Password</p>
                    <p className='text-sm text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, fugit?</p>
                    <div>
                        <ChangePassword />
                    </div>
                </div>



            </div>
        </>
    )
}

export default ProfileIndex