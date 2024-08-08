import React from 'react';
import {useAuth} from "../context/AuthContext.jsx";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({element}) => {

    const {currentUser, loading} = useAuth();

    if (loading || currentUser === null)
        return <div>Loading...</div>

    return currentUser ? element : <Navigate to="/login"/>
};

export default ProtectedRoute;