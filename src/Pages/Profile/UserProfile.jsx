
import React, { useEffect, useState } from 'react'
import { useFormik, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { KeyRoundIcon } from 'lucide-react'
import ApiList from '../../Components/ApiLIst'
import axios from 'axios'
import { Notification1 } from '../../Components/NotificationComponents/Notification'
import toast from 'react-hot-toast';


const UserProfile = (props) => {
    // const [userProfileData, setUserProfileData] = useState()
    const [notification, setNotification] = useState({})

    const { apiProfileUpdate, header } = ApiList();

    const userProfileData = props.userProfileData;



    //Formik Start

    const validationSchema = yup.object({
        firstName: yup.string().required('Require'),
        lastName: yup.string().required('Require'),
        phone: yup.string().required('Require'),
        email: yup.string().required('Require'),
    })

    const initialValues = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    }
    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values, resetForm) => {
            console.log("Value.....", values)
            UpdateProfile(values)
        },
        validationSchema
    })
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
    };

    // Formik End

    useEffect(() => {
        formik.setFieldValue("firstName", userProfileData?.first_name)
        formik.setFieldValue("lastName", userProfileData?.last_name)
        formik.setFieldValue("phone", userProfileData?.phone)
        formik.setFieldValue("email", userProfileData?.email)
    }, [userProfileData])


    const UpdateProfile = (data) => {
        const payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
        }

        axios.post(apiProfileUpdate, payload, header)
            .then((res) => {
                if (res.data.status) {
                    console.log("Profile Update Success")
                    toast.success("Profile Update Success")
                    setNotification({ type: "success", message: "Profile Update" })
                } else {
                    toast.error(res.data.message)
                    console.log("Error While Profile Update")
                }
            })
            .catch((error) => {
                toast.error("Error: Profile couldn't Update")
                console.log("Error while Profile Update", error)
            })
    }


    return (
        <>

            <Notification1 type={notification.type} message={notification.message} />
            <div className="">
                <form className='mt-8' onSubmit={formik.handleSubmit} onChange={handleChange}>
                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900" >First Name</label>
                                <div className="mt-2.5">
                                    <input
                                        placeholder="First Name"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text" {...formik.getFieldProps('firstName')} />
                                    <p className='text-red-500 text-xs'>{formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="" className="text-base font-medium text-gray-900">Last Name</label>
                                </div>
                                <div className="mt-2.5">
                                    <input
                                        placeholder="Last Name"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text" {...formik.getFieldProps('lastName')} />
                                    <p className='text-red-500 text-xs'>{formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="" className="text-base font-medium text-gray-900">Phone</label>
                                </div>
                                <div className="mt-2.5">
                                    <input
                                        placeholder="09999999999"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="number" {...formik.getFieldProps('phone')} />
                                    <p className='text-red-500 text-xs'>{formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="" className="text-base font-medium text-gray-900">Email</label>
                                </div>
                                <div className="mt-2.5">
                                    <input
                                        disabled
                                        placeholder="email@domain.com"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:text-gray-800 disabled:bg-gray-200"
                                        type="email" {...formik.getFieldProps('email')} />
                                    <p className='text-red-500 text-xs'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</p>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <button type='submit' className=" w-[8rem] inline-flex items-center justify-center rounded-md bg-gray-700 px-3.5 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}


export default UserProfile