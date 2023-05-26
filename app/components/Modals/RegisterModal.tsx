'use client'

import axios from 'axios';
import { useCallback, useState } from 'react';
import useRegisterModal from '@/app/Hooks/useRegisterModal';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { useForm, FieldValues, SubmitHandler} from 'react-hook-form';
import { Modak } from 'next/font/google';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Inputs/Input';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
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
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    } 

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title='Welcone to Airbnb' subtitle='Create an account' center />
            <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required />
            <Input id='name' label='Name' disabled={isLoading} register={register} errors={errors} required />
            <Input id='password' label='Password' type='password' disabled={isLoading} register={register} errors={errors} required />
        </div>
    )

  return (
    <Modal disabled={isLoading} isOpen={registerModal.isOpen} title='Register' actionLabel='Continue' 
    onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent}/>
  )
}

export default RegisterModal
