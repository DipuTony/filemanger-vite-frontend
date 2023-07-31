import axios from 'axios'
import React, { useState } from 'react'
import ApiList from '../../Components/ApiLIst'
import ViewDocuments from './ViewDocuments'
import ModalImage from "react-modal-image";


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

    const span = 'font-semibold'
    const main = 'font-bold text-gray-600 break-all'


    return (

        <>
            <div className=''>
                <div className='grid grid-cols-12 gap-x-5'>

                    <div className='p-5 col-span-12 md:col-span-8 bg-white rounded-md h-screen overflow-y-auto'>
                        <ViewDocuments handleUniqueId={handleUniqueId} handleReferenceNo={handleReferenceNo} />
                    </div>
                    <div className='p-2 border bg-white rounded-md col-span-12 md:col-span-4 overflow-y-auto h-screen'>
                        <p className='font-bold text-lg text-gray-800 text-left border-b'>Details</p>
                        {
                            data?.length > 0 && data?.map((item) => (
                                <div className='border rounded-md my-5 grid grid-cols-12 p-3'>
                                    <div className='col-span-12 mb-4 flex justify-center'>
                                        <div className='border'>
                                            <ModalImage
                                                className='h-52 w-full'
                                                small={item?.fullPath}
                                                large={item?.fullPath}
                                                alt={item.file_name}
                                            />
                                        </div>
                                        {/* <img className='w-40 h-40' src={item?.fullPath ? item?.fullPath : 'https://cdn-icons-png.flaticon.com/512/4942/4942906.png'} alt="Image" /> */}
                                    </div>
                                    <div className='col-span-12'>

                                        <p className={` ${main} `}>Original File Name: <span className={` ${span} `}> {item.original_file_name || "N/A"}</span></p>
                                        <p className={` ${main} `}>Unique Id:  <span className={` ${span} `}>{item?.unique_id || "N/A"}</span></p>
                                        <p className={` ${main} `}>Hash: <span className={` ${span} `}>{item?.hash || "N/A"}</span></p>
                                        <p className={` ${main} `}>File Name: <span className={` ${span} `}>{item?.file_name || "N/A"}</span></p>
                                        <p className={` ${main} `}>Size: <span className={` ${span} `}>{(item?.size / 1024 / 1024).toFixed(2) +" MB" || "N/A"}</span></p>
                                        <p className={` ${main} `}>File Type: <span className={` ${span} `}>{item?.file_type || "N/A"}</span></p>
                                        <p className={` ${main} `}>Author: <span className={` ${span} `}>{item?.author || "N/A"}</span></p>
                                        <p className={` ${main} `}>Reference No: <span className={` ${span} `}>{item?.reference_no || "N/A"}</span></p>
                                        <p className={` ${main} `}>Version:<span className={` ${span} `}>{item?.version || "N/A"}</span></p>
                                        <p className={` ${main} `}>Created Date: <span className={` ${span} `}>{item?.created_date || "N/A"}</span></p>
                                        <p className={` ${main} `}>Last Modified: <span className={` ${span} `}>{item?.last_modified || "N/A"}</span></p>
                                        <p className={` ${main} `}>FullPath: <span className={` ${span} `}>{item?.fullPath || "N/A"}</span></p>
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