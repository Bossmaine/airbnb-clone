'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/Hooks/useRegisterModal';


const Menu = () => {
    const registerModal = useRegisterModal()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuOpen = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen])

    return (
        <div className="realtive">
            <div className=" flex flex-row items-center gap-3" >
                <div onClick={() => {}} className="hidden md:block py-3 px-4 text-sm
                 rounded-full font-semibold hover:bg-neutral-100 transition cursor-pointer"> 
                    Airbnb your home
                </div>
                <div onClick={toggleMenuOpen} className=" flex flex-row items-center gap-3 rounded-full p-4 md:py-1 md:px-2 border
                 border-neutral-200 transition cursor-pointer hover:shadow-md">
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className='absolute rounded-xl w-[40vw] shadow-md md:w-[10rem] bg-white overflow-hidden 
                right-5 md:right-8 top-15 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <>
                            <MenuItem onClick={() => {}} label='Login' />
                            <MenuItem onClick={registerModal.onOpen} label='Sign up' />
                        </>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Menu