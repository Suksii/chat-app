import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (
    username,
    fullName,
    profilePicture,
    password,
    confirmPassword,
  ) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post("/auth/register", {
        username,
        fullName,
        profilePicture,
        password,
        confirmPassword,
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};

export default useRegister;
