import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ApiList from '../../Components/ApiLIst';
import ListTableRedesign from '../../Components/DataTable/ListTableRedesign'
import { nullToNA } from '../../Components/PowerupFunctions';
import AddModuleMaster from './AddModuleMaster';
import TestModal from './TestModal';
import toast from 'react-hot-toast';

const ViewModuleList = () => {
    const [fetchedData, setFetchedData] = useState()
    const [addModuleModal, setAddModuleModal] = useState(false)

    const { api_viewConsumerList, header } = ApiList();

    const fetchConsumerList = () => {
        const toastId = toast.loading("Loading...")
        axios.post(api_viewConsumerList, {}, header)
            .then((res) => {
                if (res.data.status) {
                    console.log("file data", res.data.data)
                    if (res.data.data.length > 0) setFetchedData(res.data.data) // IF API is down access FakeData list
                    toast.dismiss(toastId)
                } else {
                    toast.error(red.data.message)
                }
            })
            .catch((err) => {
                toast.error(red.data.message)
                console.log("Error while fetching file date", err)
                toast.dismiss(toastId)
            })
    }

    useEffect(() => {
        fetchConsumerList()
    }, [])


    const COLUMNS = [
        { Header: "Sl. No.", accessor: "id", },
        { Header: "Module Name", accessor: "first_name", },
        { Header: "Role", accessor: "role", },
        { Header: "Email", accessor: "email", },
        { Header: "Secret Key", accessor: "secret_key", },
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ cell }) => (
                <div>
                    {cell.row.original.status == 1 ? "Active" : "Deactivate"}
                </div>)

        },
        {
            Header: "Action",
            Cell: ({ cell }) => (
                <div>
                    <button className='bg-[#6875E3] px-3 py-1.5 rounded-md text-white' onClick={() => updateFun(cell.row.original.id)}>View</button>
                </div>
            )
        }
    ];

    return (
        <>
            <TestModal />


            {addModuleModal && <AddModuleMaster closeModal={setAddModuleModal} />}

            <div className='z-0'>

                <button onClick={() => setAddModuleModal(!addModuleModal)} className='bg-[#557eee] text-white rounded px-3 md:px-5 py-2 font-semibold flex text-sm md:text-base'> Add Module</button>


                {fetchedData ? <ListTableRedesign columns={COLUMNS} dataList={fetchedData} /> : "No date"}
            </div>
        </>
    )
}

export default ViewModuleList