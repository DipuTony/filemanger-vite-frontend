import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const EmployeeRoute = () => {
    // const { isLogedIn, userIs } = AuthIndex();

    const isLogedIn = true;
    const userIs = 1;

    console.log("user check in Employee ProtectedRouter.js", userIs);

    return isLogedIn && userIs === 1 ? <Outlet /> : <Navigate to="/" />;
};


export default EmployeeRoute