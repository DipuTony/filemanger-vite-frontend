
import React from 'react'
import { useFormik, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { KeyRoundIcon } from 'lucide-react'

const ChangePassword = (props) => {

    const validationSchema = yup.object({
        email: yup.string().required('Require'),
        password: yup.string().required('Require'),
    })
    const initialValues = {
        email: '',
        password: '',
    }
    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values, resetForm) => {
            console.log("Value.....", values)
            // finalSubmitData(values)
        },
        validationSchema
    })
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
    };
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
                                        type="email" {...formik.getFieldProps('email')} />
                                    <p className='text-red-500 text-xs'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</p>
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
                                        type="password" {...formik.getFieldProps('password')} />
                                    <p className='text-red-500 text-xs'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</p>
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