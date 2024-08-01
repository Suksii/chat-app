import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
        return (
            <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
                <div className="w-full bg-gray-100 bg-clip-padding backdrop-filter rounded-lg px-4 py-8 backdrop-blur-lg bg-opacity-10">
                    <h1 className="text-3xl text-gray-300 text-center font-semibold">Login</h1>
                    <form className="w-full flex flex-col items-center justify-center gap-2 py-4">
                        <input placeholder="Type username" type="text" className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none" />
                        <input placeholder="Type password" type="password" className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none" />
                        <p className="text-gray-300 flex gap-2 items-center">
                            <span>Don't have an account?</span>
                            <Link to="/register" className="text-blue-600 font-semibold">Register here</Link>
                        </p>
                        <button className="btn glass btn-neutral text-xl w-full">Login</button>
                    </form>
                </div>
            </div>
        );
};

export default Login;