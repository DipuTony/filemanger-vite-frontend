import React, { useEffect } from 'react'
import { useFormik, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import ApiList from '../../Components/ApiLIst'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthIndex from '../../Components/Auth/AuthIndex'

const LoginIndex = () => {
    const { isLoggedIn, userIs } = AuthIndex();
    const { api_login } = ApiList();

    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn == true && userIs == "user") navigate("/")
        if (isLoggedIn == true && userIs == "admin") navigate("/admin")
    }, [])


    // formik start
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
            // console.log("Value.....", values)
            handleSubmit(values)
        },
        validationSchema
    })
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        // { name === 'propertyType' && ((value == '1') ? setpropertyTypeStatusToggle(true) : setpropertyTypeStatusToggle(false)) }
        // { name == 'mobileNo' && formik.setFieldValue("mobileNo", allowNumberInput(value, formik.values.mobileNo, 10)) }
    };

    //formik end

    const handleSubmit = (data) => {

        const payload = {
            email: data.email,
            password: data.password
        }

        axios.post(api_login, payload)
            .then((res) => {
                if (res.data.status) {
                    console.log("Login Success", res)
                    localStorage.setItem("userData", JSON.stringify(res.data.data))
                    navigate('/')
                } else {
                    console.log("Invalid Credentials")
                }
            })
            .catch((error) => {
                console.log("Error while login", error)
            })

    }


    return (
        <>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <p className='text-2xl font-semibold text-gray-700 py-2'>
                        Document Management System
                    </p>
                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl ">
                                Sign in
                            </h1>
                            <form className='mt-8' onSubmit={formik.handleSubmit} onChange={handleChange}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <div className="mt-2.5">
                                        <input
                                            placeholder="Email"
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email" {...formik.getFieldProps('email')} />
                                        <p className='text-red-500 text-xs'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</p>
                                    </div>

                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <div className="mt-2.5">
                                        <input
                                            placeholder="Password"
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password" {...formik.getFieldProps('password')} />
                                        <p className='text-red-500 text-xs'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between my-4">
                                    <div className="flex items-start">
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-gray-600 hover:underline ">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginIndex