import axios from "axios";
import {useNavigate} from "react-router-dom";

const useLogin = () => {

    const navigate = useNavigate();
    const login = async (username, password) => {
        try {
            await axios.post("/auth/login", {username, password});
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    return {login};

};

export default useLogin;