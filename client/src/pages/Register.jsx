import React, {useState} from 'react';
import {Link} from "react-router-dom";
import useRegister from "../hooks/useRegister.jsx";
import Loading from "../loading/Loading.jsx";

const Register = () => {

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const {register, loading} = useRegister();


    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        if(username.trim() === "" || fullName.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
            setError("Please fill all fields");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if(password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        await register(username, fullName, password, confirmPassword);
    }

    return (
        <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
            <div className="w-full bg-gray-100 bg-clip-padding backdrop-filter rounded-lg px-4 py-8 backdrop-blur-lg bg-opacity-10">
                <h1 className="text-3xl text-gray-300 text-center font-semibold">Register</h1>
                <form className="w-full flex flex-col items-center justify-center gap-2 py-4" onSubmit={handleRegister}>
                    <input placeholder="Type username"
                           type="text"
                           className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none focus:text-black text-black"
                           onChange={(e) => setUsername(e.target.value)}
                    />
                    <input placeholder="Type full name"
                           type="text"
                           className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none focus:text-black text-black"
                           onChange={(e) => setFullName(e.target.value)}
                    />
                    <input placeholder="Type password"
                           type="password"
                           className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none focus:text-black text-black"
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <input placeholder="Comfirm password"
                           type="password"
                           className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none focus:text-black text-black"
                           onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <p className="text-gray-300 flex gap-2 items-center">
                        <span>Already have an account?</span>
                        <Link to="/login" className="text-blue-600 font-semibold">Login here</Link>
                    </p>
                    <button className="btn glass btn-neutral text-xl w-full">{loading ? <Loading/> : "Register"}</button>
                </form>
            </div>
        </div>
    );
};

export default Register;