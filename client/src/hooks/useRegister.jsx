import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const useRegister = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const register = async (username, fullName, password, confirmPassword) => {
        setLoading(true);
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
        } finally {
            setLoading(false);
        }
    }

    return {register, loading}
};

export default useRegister;