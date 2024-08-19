import React from 'react';
import {useAuth} from "../context/AuthContext.jsx";
import {Navigate} from "react-router-dom";
import Loading from "../loading/Loading.jsx";

const ProtectedRoute = ({element}) => {

    const {currentUser, loading} = useAuth();

    if (loading) return <Loading/>

    return currentUser ? element : <Navigate to="/login"/>
};

export default ProtectedRoute;