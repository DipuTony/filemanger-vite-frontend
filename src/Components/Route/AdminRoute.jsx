import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthIndex from "../Auth/AuthIndex";

export const AdminRoute = () => {
    const { isLoggedIn, userIs } = AuthIndex();

    return isLoggedIn && userIs === "admin" ? <Outlet /> : <Navigate to="/login" />;
};


export default AdminRoute