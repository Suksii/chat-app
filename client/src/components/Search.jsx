import React, {useState} from 'react';
import useGetConversations from "../hooks/useGetConversations.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";

const Search = () => {

    const [wide, setWide] = useState(false)
    const [search, setSearch] = useState('')

    const {users} = useGetConversations();
    const {setSelectedConversation} = useConversations();

    const handleSearch = (e) => {
        setSearch(e.target.value)
        if (!search) return;
        const fitteredUser = users.find(user => user.username.toLowerCase().includes(e.target.value.toLowerCase()))
        if (fitteredUser) {
            setSelectedConversation(fitteredUser)
        }
    }

    return (
        <div className="w-full">
            <div className="relative">
                <input className={`input focus:outline-none ${wide ? 'w-full glass' : 'w-0 bg-transparent'} duration-300 text-black placeholder:text-gray-600`}
                       placeholder="Search"
                       value={search}
                       onChange={handleSearch}
                />
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="size-6 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                     onClick={() => setWide(prevState => !prevState)}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

        </div>
    );
};

export default Search;