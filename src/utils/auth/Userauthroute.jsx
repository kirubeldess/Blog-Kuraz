import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Userauthroute = () => {
    const user = JSON.parse(localStorage.getItem("auths"));
    const isAuthenticated = user?.isauthenticated;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default Userauthroute;
