import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../context/AuthContext.jsx";

const useLogin = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {getProfile} = useAuth();
    const login = async (username, password) => {
        setLoading(true)
        try {
            await axios.post("/auth/login", {username, password});
            await getProfile();
            navigate("/");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return {login, loading};

};

export default useLogin;