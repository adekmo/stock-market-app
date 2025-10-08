"use client"

import FooterLink from '@/components/forms/FooterLink'
import InputField from '@/components/forms/InputField'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignIn = () => {
    const {
            register,
            handleSubmit,
            control,
            formState: { errors, isSubmitting },
        } = useForm<SignUpFormData>({
            defaultValues: {
                email:  '',
                password: '',
            },
            mode: 'onBlur'
        },);
    
        const onSubmit = async (data: SignUpFormData) => {
            try {
                console.log(data);
                
            } catch (e) {
                console.error(e);
                
            }
        }
  return (
    <>
        <h1 className="form-title">Login Your Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <InputField 
                name="email"
                label="Email"
                placeholder="johndoe@gmail.com"
                register={register}
                error={errors.email}
                validation={{required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email is required'}}
            />

            <InputField 
                name="password"
                label="Password"
                placeholder="enter your password"
                type="password"
                register={register}
                error={errors.password}
                validation={{required: 'Password is required', minLength: 6}}
            />

            <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                {isSubmitting ? 'Signing In' : 'Sign In'}
            </Button>

            <FooterLink
                text="Dont have an account?"
                linkText="Sign Up"
                href="/sign-up"
            />
        </form>
    </>
  )
}

export default SignIn