import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { decryptData } from './EncryptDecrypt';

const AuthIndex = () => {

    const navigate = useNavigate()
    const secretKey = 'mysecretkey';

    const userData = localStorage.getItem("userData")

    let data;
    if (userData) {
        try {
            const encryptedData = JSON.parse(userData || ''); // Provide a default empty string if userData is null
            data = decryptData(encryptedData, secretKey)
        } catch (error) {
            console.log("Catch Error in encryptedData", error)
        }
    }


    let type = null;
    switch (data?.type) {
        case 1:
            type = "user"
            break;
        case 9:
            type = "admin"
            break;

        default:
            break;
    }

    const myData = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        permission_read: data?.permission?.read,
        permission_write: data?.permission?.write,
        permission_delete: data?.permission?.delete,
        userEmail: data?.userEmail,
        token: data?.token,
        isLoggedIn: true,
        userIs: type
    }

    return myData;
}

export default AuthIndex