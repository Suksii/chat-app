import React from 'react';
import Sidebar from "../components/Sidebar.jsx";
import MessageWindow from "../components/MessageWindow.jsx";

const Home = () => {
    return (
        <div className="w-[95%] md:w-[70%] h-[600px] overflow-hidden flex bg-gray-100 bg-clip-padding backdrop-filter rounded-lg backdrop-blur-lg bg-opacity-10">
            <Sidebar/>
            <div className="divider divider-horizontal -mr-2"></div>
            <MessageWindow/>
        </div>
    );
};

export default Home;