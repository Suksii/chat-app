import axios from "axios";
import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

const useLogout = () => {

    const {setCurrentUser} = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.post("/auth/logout");
            setCurrentUser(null);
            navigate("/login");
        } catch (error) {
            console.error(error)
        }
    }

    return {logout}
};

export default useLogout;