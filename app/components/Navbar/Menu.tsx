'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/Hooks/useRegisterModal';
import useLoginModal from '@/app/Hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/Types/Index';
import useRentModal from '@/app/Hooks/useRentModal';

interface MenuProps {
    currentUser?: SafeUser | null
}

const Menu: React.FC<MenuProps> = ({currentUser}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuOpen = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen])

    const onRent = useCallback(() =>{
        if(!currentUser) {
            return loginModal.onOpen();
        }
        
        return rentModal.onOpen();
    }, [currentUser, loginModal, rentModal])

    return (
        <div className="realtive">
            <div className=" flex flex-row items-center gap-3" >
                <div onClick={onRent} className="hidden md:block py-3 px-4 text-sm
                 rounded-full font-semibold hover:bg-neutral-100 transition cursor-pointer"> 
                    Airbnb your home
                </div>
                <div onClick={toggleMenuOpen} className=" flex flex-row items-center gap-3 rounded-full p-4 md:py-1 md:px-2 border
                 border-neutral-200 transition cursor-pointer hover:shadow-md">
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className='absolute rounded-xl w-[40vw] shadow-md md:w-[10rem] bg-white overflow-hidden 
                right-5 md:right-8 top-15 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        { currentUser ? 
                            <>
                                <MenuItem onClick={() => {}} label='Trips' />
                                <MenuItem onClick={() => {}} label='Favorites' />
                                <MenuItem onClick={() => {}} label='Reservations' />
                                <MenuItem onClick={() => {}} label='My Properties' />
                                <MenuItem onClick={rentModal.onOpen} label='Airbnb your home' />
                                <hr />
                                <MenuItem onClick={() => signOut()} label='Logout' />
                            </>
                         : 
                            <>
                                <MenuItem onClick={loginModal.onOpen} label='Login' />
                                <MenuItem onClick={registerModal.onOpen} label='Sign up' />
                            </>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}
export default Menu