import React, {useState} from 'react';
import useLogout from "../hooks/useLogout.jsx";
import Loading from "../loading/Loading.jsx";

const LogoutButton = () => {

    const [isHovered, setIsHovered] = useState(false);
    const {logout, loading} = useLogout();

    return (
        <div className="flex glass items-center gap-3 p-2 bg-gray-100 bg-opacity-10 rounded-lg cursor-pointer"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={logout}
        >
            {
                loading ? <Loading/> :
                <>
                    <p className={`text-lg font-semibold ${isHovered ? 'w-12 opacity-100' : 'w-0 opacity-0'} duration-300 text-black`}>Logout</p>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 z-50"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/>
                    </svg>
                </>
            }
        </div>
    );
};

export default LogoutButton;