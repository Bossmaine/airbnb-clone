'use client'

import { useCallback, useState } from 'react';
import useRegisterModal from '@/app/Hooks/useRegisterModal';
import { FcGoogle,  } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { useForm, FieldValues, SubmitHandler} from 'react-hook-form';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import useLoginModal from '@/app/Hooks/useLoginModal';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
    const router = useRouter()
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: {
        errors,
    }} = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false
        })
        .then((callback) => {
            setIsLoading(false);

            if(callback?.ok) {
                toast.success('Logged in')
                router.refresh();
                loginModal.onClose();
            }

            if(callback?.error) {
                toast.error(callback.error)
            }
        })
    } 

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title='Welcone back' subtitle='Login to your accout!' center />
            <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required />
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
                        First time using Airbnb? 
                    </div>
                    <div className='text-neutral-800 cursor-pointer hover:underline' onClick={toggle}>
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )

  return (
    <Modal disabled={isLoading} isOpen={loginModal.isOpen} title='Login' actionLabel='Continue' 
    onClose={loginModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>
  )
}

export default LoginModal
