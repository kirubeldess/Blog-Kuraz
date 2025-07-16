import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const Userauthroute = () => {

    const user=JSON.parse(localStorage.getItem("authuser"));
    const isauthenticated=user?.isauthenticated;

    const navigate = useNavigate();
    console.log(user)
    
    useEffect(()=>{
        if(isauthenticated === undefined){
        navigate('/login')
    }
    },[])
    
    return <Outlet/>;

}

export default Userauthroute;
