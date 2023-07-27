
import React from 'react'
import { useFormik, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { KeyRoundIcon } from 'lucide-react'
import axios from 'axios'
import ApiList from '../../Components/ApiLIst'

const ChangePassword = (props) => {

    const { apiChangePassword, header } = ApiList();

    const validationSchema = yup.object({
        oldPassword: yup.string().required('Require'),
        newPassword: yup.string().required('Require'),
    })
    const initialValues = {
        oldPassword: '',
        newPassword: '',
    }
    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values, resetForm) => {
            console.log("Value.....", values)
            handelForm(values)
        },
        validationSchema
    })
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
    };

    const handelForm = (data) => {
        const payload = {
            "oldPassword": data.oldPassword,
            "newPassword": data.newPassword
        }

        axios.post(apiChangePassword, payload, header)
            .then((res) => {
                if (res.data.status) {
                    console.log("Password Change Successful")
                } else {
                    console.log("Error Password Change")
                }
            })
            .catch((error) => {
                console.log("Error Password Change", error)
            })

    }

    return (
        <>
            <div className="">
                <div className="">


                    <form className='mt-8' onSubmit={formik.handleSubmit} onChange={handleChange}>
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900" > Old Password</label>
                                <div className="mt-2.5">
                                    <input
                                        placeholder="Old Password"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password" {...formik.getFieldProps('oldPassword')} />
                                    <p className='text-red-500 text-xs'>{formik.touched.oldPassword && formik.errors.oldPassword ? formik.errors.oldPassword : null}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="" className="text-base font-medium text-gray-900">New Password</label>
                                </div>
                                <div className="mt-2.5">
                                    <input
                                        placeholder="New Password"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password" {...formik.getFieldProps('newPassword')} />
                                    <p className='text-red-500 text-xs'>{formik.touched.newPassword && formik.errors.newPassword ? formik.errors.newPassword : null}</p>
                                </div>
                            </div>
                            <div className=''>
                                <button type='submit' className="w-full inline-flex items-center justify-center rounded-md bg-gray-700 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900">
                                    Change Password
                                    <KeyRoundIcon size={20} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}


export default ChangePassword