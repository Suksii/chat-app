import axios from "axios";
import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const useLogout = () => {

    const {setCurrentUser} = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        setLoading(true)
        try {
            await axios.post("/auth/logout");
            setCurrentUser(null);
            navigate("/login");
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    return {logout, loading}
};

export default useLogout;