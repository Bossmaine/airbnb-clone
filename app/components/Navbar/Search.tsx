'use client';

import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className="border w-full md:w-auto rounded-full transiton cursor-pointer py-3 shadow-sm">
            <div className="flex flex-row justify-between items-center">
                <div className="px-6 font-semibold text-sm">
                    Anywhere
                </div>
                <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center ">
                    Any Week
                </div>
                <div className="flex flex-row items-center gap-3 tex-sm text-gray-600 pl-6 pr-2">
                    <div className="hidden sm:block">
                        Add Guests
                    </div>
                    <div className="p-2 bg-rose-500 text-white rounded-full">
                        <BiSearch />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;