import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (onSearch) {
            onSearch(value); 
        }
    };

    return (
        <div className="flex relative items-center">
            {query === '' && (
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 p-2">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="search" opacity="0.5">
                            <path
                                id="Oval"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.51519 10.3097C10.9073 9.36704 12.0224 6.80485 11.0057 4.58686C9.98911 2.36887 7.22577 1.33498 4.83365 2.2776C2.44152 3.22023 1.32646 5.78241 2.34309 8.00041C3.35972 10.2184 6.12306 11.2523 8.51519 10.3097Z"
                                stroke="black"
                                strokeWidth="1.0275"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                id="Path"
                                d="M10.0018 9.37915L13.6518 12.764"
                                stroke="black"
                                strokeWidth="1.0275"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </div>
            )}
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="     Tìm kiếm..."
                className="border rounded-[24px] px-4 py-2 w-[340px] focus:outline-none"
            />
        </div>
    );
};

export default SearchBar;