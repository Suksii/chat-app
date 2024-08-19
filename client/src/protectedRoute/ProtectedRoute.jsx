import React from 'react';
import {useAuth} from "../context/AuthContext.jsx";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({element}) => {

    const {currentUser} = useAuth();

    return currentUser ? element : <Navigate to="/login"/>
};

export default ProtectedRoute;