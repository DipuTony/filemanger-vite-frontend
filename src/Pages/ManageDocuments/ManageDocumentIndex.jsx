import axios from 'axios'
import React, { useState } from 'react'
import ApiList from '../../Components/ApiLIst'
import ViewDocuments from './ViewDocuments'

const ManageDocumentIndex = (props) => {
    const [data, setData] = useState()

    const { api_viewDocumentByReference, header, api_viewDocumentByUid } = ApiList()

    const handleUniqueId = (uid) => {
        axios.post(api_viewDocumentByUid, { "uniqueId": uid }, header)
            .then((res) => {
                console.log("UID data", res.data.data)
                setData(res.data.data)
            })
            .catch((err) => {
                console.log("Error while fetching unique data data", err)
            })
    }

    const handleReferenceNo = (refNo) => {
        axios.post(api_viewDocumentByReference, { "referenceNo": refNo }, header)
            .then((res) => {
                console.log("ref data", res.data.data)
                setData(res.data.data)
            })
            .catch((err) => {
                console.log("Error while fetching ref data", err)
            })
    }

    const span = 'font-semibold break-words'
    const main = 'font-bold text-gray-600'


    return (

        <>
            <div className=''>
                <div className='grid grid-cols-12 gap-x-5'>

                    <div className='p-5 col-span-12 md:col-span-8 bg-white rounded-md h-screen overflow-y-auto'>
                        <ViewDocuments handleUniqueId={handleUniqueId} handleReferenceNo={handleReferenceNo} />
                    </div>
                    <div className='p-2 col-span-12 md:col-span-4 bg-white rounded-md'>
                        <p className='font-bold text-2xl text-gray-700 text-center'>Details</p>
                        {
                            data?.length > 0 && data?.map((item) => (
                                <div className='border rounded grid grid-cols-12 p-3'>
                                    <div className='col-span-12 flex justify-center'>
                                        <img className='w-40 h-40' src={item?.fullPath ? item?.fullPath : 'https://cdn-icons-png.flaticon.com/512/4942/4942906.png'} alt="Image" />
                                    </div>
                                    <div className='col-span-12'>

                                        <p className={` ${main} `}>Original File Name: <span className={` ${span} `}> {item.original_file_name}</span></p>
                                        <p className={` ${main} `}>Unique Id:  <span className={` ${span} `}>6f2a54e0ff8f679a</span></p>
                                        <p className={` ${main} `}>Hash: <span className={` ${span} `}>a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3</span></p>
                                        <p className={` ${main} `}>File Name: <span className={` ${span} `}>1689168991571-910580706.jpg</span></p>
                                        <p className={` ${main} `}>Size: <span className={` ${span} `}>1225054</span></p>
                                        <p className={` ${main} `}>File Type: <span className={` ${span} `}>null</span></p>
                                        <p className={` ${main} `}>Author: <span className={` ${span} `}>3</span></p>
                                        <p className={` ${main} `}>Reference No: <span className={` ${span} `}>REF1689168991582</span></p>
                                        <p className={` ${main} `}>Version:<span className={` ${span} `}> 3</span></p>
                                        <p className={` ${main} `}>Created Date: <span className={` ${span} `}>null</span></p>
                                        <p className={` ${main} `}>Last Modified: <span className={` ${span} `}>null</span></p>
                                        <p className={` ${main} `}>FullPath: <span className={` ${span} `}>{item?.fullPath ? item?.fullPath : 'https://cdn-icons-png.flaticon.com/512/4942/4942906.png'}</span></p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div >
        </>
    )
}

export default ManageDocumentIndex