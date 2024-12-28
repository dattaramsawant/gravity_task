import Image from 'next/image'
import { useState } from 'react';

export default function Search(props) {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="flex items-center w-96">
            <div className="relative flex-grow">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 pl-10 text-gray-700 bg-white border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={search}
                    onChange={onChange}
                />
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Image 
                        src={"/search.svg"} 
                        alt="Search Icon"
                        width={20}
                        height={20} 
                    />
                </div>
            </div>

            <button onClick={()=>props?.onSearch(search)} className="px-4 py-2 text-white bg-blue-800 rounded-r-md hover:bg-blue-700">
                Search
            </button>
        </div>
    );
}
