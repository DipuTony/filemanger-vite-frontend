import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthIndex from "../Auth/AuthIndex";

export const IsLoginRoute = () => {
    const { isLoggedIn, userIs } = AuthIndex();

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};


export default IsLoginRoute