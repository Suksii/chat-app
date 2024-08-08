import axios from "axios";
import {useNavigate} from "react-router-dom";

const useRegister = () => {

    const navigate = useNavigate();

    const register = async (username, fullName, password, confirmPassword) => {
        try {
            await axios.post("/auth/register", {
                username,
                fullName,
                password,
                confirmPassword
            });
            navigate("/");
        } catch (error) {
            console.error(error)
        }
    }

    return {register}
};

export default useRegister;