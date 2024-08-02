import React, {useState} from 'react';

const UserAvatar = () => {

    const [online, setOnline] = useState(false)

    return (
        <div className={`avatar  ${online ? 'online' : 'offline'}`}>
            <div className="w-10 h-10 rounded-full bg-gray-300">
                {/*<img src="" alt="" className="w-full h-full object-cover rounded-full"/>*/}
            </div>
        </div>
    );
};

export default UserAvatar;