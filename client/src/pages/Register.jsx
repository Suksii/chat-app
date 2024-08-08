import React, {useState} from 'react';
import {Link} from "react-router-dom";
import useRegister from "../hooks/useRegister.jsx";

const Register = () => {

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {register} = useRegister();


    const handleRegister = async (e) => {
        e.preventDefault();
        await register(username, fullName, password, confirmPassword);
    }

    return (
        <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
            <div className="w-full bg-gray-100 bg-clip-padding backdrop-filter rounded-lg px-4 py-8 backdrop-blur-lg bg-opacity-10">
                <h1 className="text-3xl text-gray-300 text-center font-semibold">Register</h1>
                <form className="w-full flex flex-col items-center justify-center gap-2 py-4" onSubmit={handleRegister}>
                    <input placeholder="Type username"
                           type="text"
                           className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none"
                           onChange={(e) => setUsername(e.target.value)}
                    />
                    <input placeholder="Type full name"
                           type="text"
                           className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none"
                           onChange={(e) => setFullName(e.target.value)}
                    />
                    <input placeholder="Type password"
                           type="password"
                           className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none"
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <input placeholder="Comfirm password"
                           type="password"
                           className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none"
                           onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p className="text-gray-300 flex gap-2 items-center">
                        <span>Already have an account?</span>
                        <Link to="/login" className="text-blue-600 font-semibold">Login here</Link>
                    </p>
                    <button className="btn glass btn-neutral text-xl w-full">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;