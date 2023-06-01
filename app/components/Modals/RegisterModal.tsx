'use client'

import axios from 'axios';
import { useCallback, useState } from 'react';
import useRegisterModal from '@/app/Hooks/useRegisterModal';
import { FcGoogle,  } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { useForm, FieldValues, SubmitHandler} from 'react-hook-form';
import { Modak } from 'next/font/google';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';
import LoginModal from './LoginModal';
import useLoginModal from '@/app/Hooks/useLoginModal';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: {
        errors,
    }} = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
        .then(() => {
            registerModal.onClose();
        })
        .catch((error) => {
           toast.error("Unable to register!")
        })
        .finally(() => {
            setIsLoading(false)
        })
    } 

    const toggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title='Welcone to Airbnb!' subtitle='Create an account' center />
            <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required />
            <Input id='name' label='Name' disabled={isLoading} register={register} errors={errors} required />
            <Input id='password' label='Password' type='password' disabled={isLoading} register={register} errors={errors} required />
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button outline label='Continue with Google' icon={FcGoogle}  onClick={() => signIn('google')}/>
            <Button outline label='Continue with Facebook' icon={AiFillFacebook}  onClick={() => signIn('facebook')}/>
            <div className='text-center text-neutral-500 mt-4 font-light'>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <div>
                        Already have an account? 
                    </div>
                    <div className='text-neutral-800 cursor-pointer hover:underline' onClick={toggle}>
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

  return (
    <Modal disabled={isLoading} isOpen={registerModal.isOpen} title='Register' actionLabel='Continue' 
    onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>
  )
}

export default RegisterModal
