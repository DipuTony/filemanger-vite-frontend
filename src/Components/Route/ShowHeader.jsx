import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

const ShowHeader = () => {

    return (
        <>
            <div className='grid grid-cols-12 bg-gray-100 '>
                <div className={`md:col-span-2 absolute md:relative md:block w-[90%] md:mt-0 md:w-full`}>
                    <Sidebar />
                </div>
                <div className='md:col-span-10 col-span-12 relative '>
                    <div className='absolute top-2 right-5 left-5 z-50 '>
                        <Header />
                        <div className="mt-16">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


};


export default ShowHeader