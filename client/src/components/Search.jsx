import React, {useState} from 'react';

const Search = () => {

    const [wide, setWide] = useState(false)

    return (
        <div className="w-full">
            <div className="relative">
                <input className={`input focus:outline-none ${wide ? 'w-full glass' : 'w-0 bg-transparent'} duration-300`} placeholder="Search"/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setWide(prevState => !prevState)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

        </div>
    );
};

export default Search;