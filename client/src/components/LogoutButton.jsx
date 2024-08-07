import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

const LogoutButton = () => {

    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const {currentUser, setCurrentUser} = useAuth();

    const logout = async () => {
        try {
            await axios.post("/auth/logout");
            setCurrentUser(null);
            navigate("/login");
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex glass items-center gap-3 p-2 bg-gray-100 bg-opacity-10 rounded-lg cursor-pointer"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={logout}
        >
            <p className={`text-lg font-semibold ${isHovered ? 'w-12 opacity-100' : 'w-0 opacity-0'} duration-300`}>Logout</p>
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth={1.5}
                 stroke="currentColor"
                 className="size-8 z-50"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
        </div>
    );
};

export default LogoutButton;