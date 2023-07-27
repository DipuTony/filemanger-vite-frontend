import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthIndex from "../Auth/AuthIndex";

export const EmployeeRoute = () => {
    const { isLoggedIn, userIs } = AuthIndex();

    console.log("isLoggedIn, userIs", isLoggedIn, userIs)

    return isLoggedIn && userIs === "user" ? <Outlet /> : <Navigate to="/login" />;
};


export default EmployeeRoute