import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const useLogin = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const login = async (username, password) => {
        setLoading(true)
        try {
            await axios.post("/auth/login", {username, password});
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