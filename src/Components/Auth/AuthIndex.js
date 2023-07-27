import React from 'react'

const AuthIndex = () => {

    const userData = localStorage.getItem("userData")
    const data = JSON.parse(userData)

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