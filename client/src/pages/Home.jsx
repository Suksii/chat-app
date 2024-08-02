import React from 'react';
import Sidebar from "../components/Sidebar.jsx";
import MessageWindow from "../components/MessageWindow.jsx";

const Home = () => {
    return (
        <div className="w-[95%] md:w-[70%] flex h-[500px] bg-gray-100 bg-clip-padding backdrop-filter rounded-lg px-4 py-8 backdrop-blur-lg bg-opacity-10">
            <Sidebar/>
            <div className="divider"></div>
            <MessageWindow/>
        </div>
    );
};

export default Home;