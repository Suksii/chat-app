import {createContext, useContext, useEffect, useState, useMemo} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProfile = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/auth/profile");
            setCurrentUser(response.data);
        } catch (error) {
            console.error(error);
            setCurrentUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser, loading, getProfile}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}