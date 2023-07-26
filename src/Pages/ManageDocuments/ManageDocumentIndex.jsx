import React from 'react'
import ViewDocuments from './ViewDocuments'

const ManageDocumentIndex = () => {
    return (

        <>
            <div className=''>
                <div className='grid grid-cols-12 gap-x-5'>

                    <div className='p-5 col-span-12 md:col-span-8 bg-white rounded-md h-screen overflow-y-auto'>
                        <ViewDocuments />
                    </div>
                    <div className='p-5 col-span-12 md:col-span-4 bg-white rounded-md'>
                        <p className='font-bold text-2xl text-gray-700 text-center'>Details</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageDocumentIndex