import React, { useEffect, useState } from 'react'
import { IoIosSettings } from 'react-icons/io';
import { AiTwotoneDelete } from 'react-icons/ai';
import { TbEdit } from 'react-icons/tb';
import axios from 'axios';
import moment from 'moment';
import { fakeCategory, fakeData } from '../Components/data';



const MainPage = () => {
    const [categoryData, setCategoryData] = useState(fakeCategory)
    const [fileData, setFileData] = useState(fakeData)
    const [searchKey, setSearchKey] = useState()
    const [finalData, setFinalData] = useState()
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [deleted, setDeleted] = useState()

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
        axios.get('https://646312614dca1a661353d0ee.mockapi.io/api/File')
            .then((res) => {
                console.log("file data", res.data)
                if (res.data.length > 0) setFileData(res.data) // IF API is down access FakeData list
            })
            .catch((err) => {
                console.log("Error while fetching file date", err)
            })
    }


    useEffect(() => {
        fetchCategory()
        fetchFileData()
    }, [])

    const filterData = fileData?.filter(name => name?.Name?.toLowerCase()?.includes(searchKey?.toLowerCase()))

    useEffect(() => {
        if (searchKey?.length > 0) {
            setFinalData(filterData)
        } else {
            setFinalData(fileData)
        }
    }, [searchKey])

    const handleDeleteIcon = (id) => {
        console.log("Delete clicked..", id)
        setOpenDeleteModal(false)
        setDeleted(id)

    }
    // console.log("deleted", deleted)
    return (
        <>
            <div className='bg-[#EFF3FA] h-screen'>
                <div className='grid grid-cols-12 md:pt-14'>

                    <div className='col-span-12 md:col-span-2 mt-5 md:mt-10 ml-2 md:ml-8 accent-[#824DE8]'>
                        <p className='uppercase flex font-semibold text-base'>categories <span className='mt-0.5 ml-3'> <IoIosSettings color='gray' size={18} /></span> </p>

                        {
                            categoryData?.map((item) => (
                                <div key={item.id}>
                                    <p className='pt-3 font-semibold'>{item.Name}</p>
                                    <div className='flex md:block gap-5'>
                                        {item?.Labels?.map((label) => (

                                            <div key={label.id}> <input type="checkbox" name="" id="" /> {label.Name} </div>
                                        ))
                                        }
                                    </div>
                                </div>
                            ))
                        }



                    </div>
                    <div className='col-span-12 md:col-span-9'>

                        <div className='flex justify-end '>
                            <input
                                onChange={(e) => setSearchKey(e.target.value)}
                                type="text"
                                name="search"
                                id=""
                                placeholder='Search by name'
                                className='rounded-md border-2 border-gray-200 placeholder:text-xs h-8 mb-2 px-2' />
                        </div>
                        <div className='bg-white rounded-md shadow-lg p-4 md:m-0 mr-2'>
                            <p className='mb-10 font-bold text-gray-700'>All Items</p>


                            <div className='grid grid-cols-12 uppercase font-semibold text-sm text-gray-800 border-b-2'>
                                <div className='col-span-4 flex md:gap-3 gap-1'>
                                    <input type="checkbox" name="" id="" className='accent-[#824DE8]'/>
                                    Name
                                </div>
                                <div className='col-span-1 md:text-base text-xs'>Owner</div>
                                <div className='col-span-2 md:text-base text-xs'>Labels</div>
                                <div className='col-span-2 md:text-base text-xs'>Type</div>
                                <div className='col-span-2 md:text-base text-xs'>Modified</div>
                                <div className='col-span-1 md:text-base text-xs'>Action</div>
                            </div>

                            {
                                finalData?.filter(item => item.id != deleted)?.map((item) => (
                                    <div key={item.id} className='grid grid-cols-12 items-center text-sm text-gray-700 py-3 md:py-5 border-b'>
                                        <div className='col-span-4 flex items-center md:gap-3 gap-1'>
                                            <input type="checkbox" name="" id="" className='accent-[#824DE8]' />
                                            <img src={item.file} alt="Alt Text" className='md:h-8 h-6 rounded md:rounded-md' />
                                            <p className='font-semibold md:text-base text-xs break-all'>{item.Name}</p>
                                        </div>
                                        <div className='col-span-1'>
                                            <img src={item.Owner} alt="Test" className='rounded-full w-6 h-6 md:w-8 md:h-8' />
                                        </div>
                                        <div className='col-span-2'>Labels</div>
                                        <div className='col-span-2 uppercase break-all md:text-base text-xs'>{item.Type}</div>
                                        <div className='col-span-2 md:text-base text-xs'>{moment(item.ModifietAt).format("Do MMM 'YY")}</div>
                                        <div className='col-span-1 flex md:gap-2 relative'>
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

                    </div>
                    <div className='col-span-1'></div>
                </div>

            </div>
        </>
    )
}

export default MainPage