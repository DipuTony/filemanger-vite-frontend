import React, { useEffect, useState } from 'react'
import { IoIosSettings } from 'react-icons/io';
import { AiTwotoneDelete } from 'react-icons/ai';
import { TbEdit } from 'react-icons/tb';
import { GrView } from 'react-icons/gr';
import axios from 'axios';
import moment from 'moment';
import { fakeCategory } from '../../Components/data';
import ApiList from '../../Components/ApiLIst';
import ModalImage from "react-modal-image";




const ViewDocuments = () => {
    const [categoryData, setCategoryData] = useState(fakeCategory)
    const [searchKey, setSearchKey] = useState()
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [deleted, setDeleted] = useState()
    const [viewImageUrl, setViewImageUrl] = useState(false)

    const [fetchedData, setFetchedData] = useState()

    const { api_viewAllDocuments } = ApiList()

    const fetchCategory = () => {
        axios.get('https://646312614dca1a661353d0ee.mockapi.io/api/Category')
            .then((res) => {
                // console.log("category data", res.data)
                if (res.data.length > 0) setCategoryData(res.data)// IF API is down access FakeData list
            })
            .catch((err) => {
                console.log("Error while fetching category date", err)
            })
    }
    const fetchFileData = () => {
        console.log("Data fetcoing..", api_viewAllDocuments)
        axios.post(api_viewAllDocuments)
            .then((res) => {
                console.log("file data", res.data.data)
                if (res.data.data.length > 0) setFetchedData(res.data.data) // IF API is down access FakeData list
            })
            .catch((err) => {
                console.log("Error while fetching file date", err)
            })
    }


    useEffect(() => {
        fetchCategory()
        fetchFileData()
    }, [])

    const handleDeleteIcon = (id) => {
        console.log("Delete clicked..", id)
        setOpenDeleteModal(false)
        setDeleted(id)

    }
    return (
        <>

            <div className=''>
                <p className='mb-10 font-bold text-gray-700'>All Items</p>

                <div className='grid grid-cols-12 uppercase font-semibold text-sm text-gray-800 border-b-2'>
                    <div className='col-span-4 flex md:gap-3 gap-1'>
                        <input type="checkbox" name="" id="" className='accent-[#824DE8]' />File Name</div>
                    <div className='col-span-2 md:text-base text-xs'>size</div>
                    <div className='col-span-2 md:text-base text-xs'>Type</div>
                    <div className='col-span-2 md:text-base text-xs'>Modified</div>
                    <div className='col-span-1 md:text-base text-xs'>Action</div>
                </div>

                {
                    fetchedData?.map((item) => (
                        <div key={item.id} className='grid grid-cols-12 items-center text-sm text-gray-700 py-3 md:py-5 border-b'>
                            <div className='col-span-4 flex items-center md:gap-3 gap-1'>
                                <input type="checkbox" name="" id="" className='accent-[#824DE8]' />
                                <p className='font-semibold md:text-base text-xs break-all'>{item.original_file_name}</p>
                            </div>

                            <div className='col-span-2'>{item.size}</div>
                            <div className='col-span-2 uppercase break-all md:text-base text-xs'>{item.type}</div>
                            <div className='col-span-2 md:text-base text-xs'>{moment(item.created_at).format("Do MMM 'YY")}</div>
                            <div className='col-span-1 flex md:gap-2 relative'>
                                <p className=' cursor-pointer hover:bg-gray-300 rounded-md p-1'>
                                    {/* <GrView size={15} /> */}
                                    View
                                    <ModalImage
                                        small={item.fullPath}
                                        large={item.fullPath}
                                        // alt={item.fullPath}
                                    />
                                </p>
                                <p className='cursor-pointer hover:bg-gray-300 rounded-md p-1'>
                                    <TbEdit size={15} />
                                </p>

                                {openDeleteModal == item.id &&
                                    <div className='absolute shadow-inner w-40  right-5 -top-12'>
                                        <p className='flex text-xs bg-gray-200 pl-3 rounded-t-lg'> <AiTwotoneDelete className='mt-0.5 mr-1' size={12} />Remove</p>
                                        <p className='rounded-b-lg border bg-white border-gray-200 text-sm pl-2 py-1 flex items-center gap-2'>
                                            Are you sure ?
                                            <img onClick={() => handleDeleteIcon(item.id)} src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="ok" className='h-3 cursor-pointer' />
                                            <img onClick={() => setOpenDeleteModal(false)} src="https://cdn-icons-png.flaticon.com/512/458/458594.png" alt="cancel" className='h-3 cursor-pointer' />
                                        </p>
                                        <div class="absolute bottom-0 right-[22px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-2 bg-white border-r border-b border-gray-300"></div>
                                    </div>
                                }

                                <p onClick={() => setOpenDeleteModal(item.id)} className='cursor-pointer hover:bg-gray-300 rounded-md p-1'>
                                    <AiTwotoneDelete size={15} />
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ViewDocuments